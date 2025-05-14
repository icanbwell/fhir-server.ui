import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Buffer } from 'buffer';
import { setLocalData } from '../utils/localData.utils';
import UserContext from '../context/UserContext';
import { jwtParser } from '../utils/jwtParser';
import AuthUrlProvider from '../utils/authUrlProvider';

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
    const { setUserDetails } = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const [isProcessing, setIsProcessing] = useState(false);

    const redirectToLogin = async () => {
        // Prevent multiple simultaneous redirects
        if (isProcessing) {
            return;
        }

        const identityProvider = sessionStorage.getItem('identityProvider');
        if (!identityProvider) {
            console.error('No identity provider found in session storage');
            return;
        }
        const authUrls = new AuthUrlProvider().getAuthUrls(identityProvider);
        console.log(`Auth URLs: ${JSON.stringify(authUrls)}`);

        console.log('Redirecting to login...');
        setIsProcessing(true);

        try {
            // Generate PKCE parameters
            const verifier = generateCodeVerifier();
            const challenge = await generateCodeChallenge(verifier);

            // Store code verifier in localStorage (more persistent than sessionStorage)
            localStorage.setItem('code_verifier', verifier);

            // Determine resource URL from state or default
            const resourceUrl = location.state?.resourceUrl || '/';

            // Construct authorization parameters
            const authParams = new URLSearchParams({
                client_id: authUrls.clientId,
                response_type: 'code',
                scope: 'openid profile email groups',
                redirect_uri: `${window.location.origin}/authcallback`,
                state: Buffer.from(resourceUrl).toString('base64'),
                code_challenge: challenge,
                code_challenge_method: 'S256',
            });

            // Redirect to Okta authorization endpoint
            window.location.href = `${authUrls.authorizeUrl}?${authParams.toString()}`;
        } catch (error) {
            console.error('Redirect to login failed', error);
            setIsProcessing(false);
        }
    };

    const fetchToken = async (code: string) => {
        // Prevent multiple token fetches
        if (isProcessing) {
            return;
        }
        setIsProcessing(true);

        console.log('Fetching token....');
        const authUrls = new AuthUrlProvider().getAuthUrls('OKTA');
        console.log(`Auth URLs: ${JSON.stringify(authUrls)}`);

        // Retrieve code verifier from localStorage
        const storedVerifier = localStorage.getItem('code_verifier');
        if (!storedVerifier) {
            console.error('No code verifier found');
            setIsProcessing(false);
            await redirectToLogin();
            return;
        }

        // Decode the state to get the original resource URL
        const state = queryParams.get('state');
        const resourceUrl = state ? Buffer.from(state, 'base64').toString('ascii') : '/';

        try {
            const tokenRequestData = new URLSearchParams({
                grant_type: 'authorization_code',
                client_id: authUrls.clientId,
                code: code,
                redirect_uri: `${window.location.origin}/authcallback`,
                code_verifier: storedVerifier,
            });

            const res = await axios.request({
                url: authUrls.tokenUrl,
                method: 'POST',
                data: tokenRequestData,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            // Store tokens
            setLocalData('jwt', res.data.access_token);
            setLocalData('id_token', res.data.id_token);

            // Parse and set user details
            if (setUserDetails) {
                setUserDetails(jwtParser());
            }

            // Clean up stored code verifier
            localStorage.removeItem('code_verifier');

            // Navigate to original resource URL
            navigate(resourceUrl, { replace: true });
        } catch (err) {
            console.error('Token fetch error:', err);
            setIsProcessing(false);
            // await redirectToLogin();
        }
    };

    useEffect(() => {
        // Reset processing state when location changes
        setIsProcessing(false);

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
