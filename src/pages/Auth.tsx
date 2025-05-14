import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Buffer } from 'buffer';
import { setLocalData } from '../utils/localData.utils';
import EnvironmentContext from '../context/EnvironmentContext';
import UserContext from '../context/UserContext';
import { jwtParser } from '../utils/jwtParser';

// PKCE utility functions
const generateCodeVerifier = (length = 128) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return Array.from(values, (x) => possible[x % possible.length]).join('');
};

const generateCodeChallenge = async (codeVerifier: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
};

const Auth = () => {
    const env = useContext(EnvironmentContext);
    const { setUserDetails } = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    // const [codeVerifier, setCodeVerifier] = useState<string | null>(null);

    const redirectToLogin = async () => {
        console.log('Redirecting to login...');

        // Generate PKCE parameters
        const verifier = generateCodeVerifier();
        const challenge = await generateCodeChallenge(verifier);

        // Store code verifier in sessionStorage for later use
        sessionStorage.setItem('code_verifier', verifier);

        // Determine resource URL from state or default
        const resourceUrl = location.state?.resourceUrl || '/';

        // Construct authorization parameters
        const authParams = new URLSearchParams({
            client_id: env.AUTH_CODE_FLOW_CLIENT_ID,
            response_type: 'code',
            scope: 'openid profile email',
            redirect_uri: `${window.location.origin}/authcallback`,
            state: Buffer.from(resourceUrl).toString('base64'),
            code_challenge: challenge,
            code_challenge_method: 'S256',
        });

        // Redirect to Okta authorization endpoint
        window.location.replace(`${env.AUTH_CODE_FLOW_AUTHORIZE_URL}?${authParams.toString()}`);
    };

    const fetchToken = async (code: string) => {
        console.log('Fetching token....');

        // Retrieve code verifier from sessionStorage
        const storedVerifier = sessionStorage.getItem('code_verifier');
        if (!storedVerifier) {
            console.error('No code verifier found');
            redirectToLogin();
            return;
        }

        // Decode the state to get the original resource URL
        const state = queryParams.get('state');
        const resourceUrl = state ? Buffer.from(state, 'base64').toString('ascii') : '/';

        try {
            const tokenRequestData = new URLSearchParams({
                grant_type: 'authorization_code',
                client_id: env.AUTH_CODE_FLOW_CLIENT_ID,
                code: code,
                redirect_uri: `${window.location.origin}/authcallback`,
                code_verifier: storedVerifier,
            });

            const res = await axios.request({
                url: env.AUTH_CODE_FLOW_TOKEN_URL,
                method: 'POST',
                data: tokenRequestData,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            // Store tokens (adjust based on Okta's token response)
            setLocalData('jwt', res.data.access_token);
            setLocalData('id_token', res.data.id_token);

            // Parse and set user details
            if (setUserDetails) {
                setUserDetails(
                    jwtParser({
                        customGroup: env.AUTH_CUSTOM_GROUP,
                        customScope: env.AUTH_CUSTOM_SCOPE,
                    })
                );
            }

            // Clean up stored code verifier
            sessionStorage.removeItem('code_verifier');

            // Navigate to original resource URL
            navigate(resourceUrl, { replace: true });
        } catch (err) {
            console.error('Token fetch error:', err);
            redirectToLogin();
        }
    };

    useEffect(() => {
        const code = queryParams.get('code');

        if (!code) {
            console.info('No code received, redirecting to login...');
            redirectToLogin().then((r) => r);
        } else {
            fetchToken(code).then((r) => r);
        }
    }, [location]);

    return <>Authenticating...</>;
};

export default Auth;
