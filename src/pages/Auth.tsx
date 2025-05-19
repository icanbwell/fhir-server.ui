import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { setLocalData } from '../utils/localData.utils';
import UserContext from '../context/UserContext';
import { jwtParser } from '../utils/jwtParser';
import { Buffer } from 'buffer';
import AuthServiceFactory from '../services/AuthServiceFactory';
import { IAuthService } from '../services/IAuthService';

const Auth = () => {
    const { setUserDetails } = useContext(UserContext);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const authService: IAuthService = AuthServiceFactory.getAuthService();

    const redirectToLogin = async () => {
        if (isProcessing) {
            return;
        }

        const identityProvider = localStorage.getItem('identityProvider');
        if (!identityProvider) {
            console.error('No identity provider found in local storage');
            setError('No identity provider found in local storage');
            return;
        }

        setIsProcessing(true);

        let redirect_to_login_url: string | undefined;
        try {
            const resourceUrl = location.state?.resourceUrl || '/';
            redirect_to_login_url = await authService.getLoginUrlAsync(
                identityProvider,
                resourceUrl
            );
            window.location.href = redirect_to_login_url;
        } catch (error1) {
            console.error('Redirect to login failed', error1);
            setError(`Failed to redirect to login: ${redirect_to_login_url}: ${error1}`);
            setIsProcessing(false);
        }
    };

    const fetchToken = async (code: string) => {
        if (isProcessing) {
            return;
        }

        setIsProcessing(true);

        const identityProvider = localStorage.getItem('identityProvider');
        if (!identityProvider) {
            console.error('No identity provider found in local storage');
            setError('No identity provider found in local storage');
            setIsProcessing(false);
            return;
        }

        try {
            const state = queryParams.get('state');
            const resourceUrl = state ? Buffer.from(state, 'base64').toString('ascii') : '/';
            const tokens = await authService.fetchTokenAsync(identityProvider, code, resourceUrl);

            setLocalData('jwt', tokens.access_token);
            setLocalData('id_token', tokens.id_token);

            if (setUserDetails) {
                setUserDetails(jwtParser());
            }
            console.log(`Token Fetched. Redirecting to ${resourceUrl}`);
            window.location.href = resourceUrl;
        } catch (error1) {
            console.error('Token fetch error:', error1);
            setError(`Failed to fetch token: ${error1}`);
            setIsProcessing(false);
        }
    };

    useEffect(() => {
        setIsProcessing(false);

        const code = queryParams.get('code');
        if (!code) {
            if (queryParams.get('error')) {
                const errorCode = queryParams.get('error');
                const errorDescription = queryParams.get('error_description');
                setError(`Authentication error, ${errorCode}: ${errorDescription}`);
                return;
            }
            redirectToLogin().catch(console.error);
        } else {
            fetchToken(code).catch(console.error);
        }
    }, []);

    return <>{error ? <div style={{ color: 'red' }}>{error}</div> : <>Authenticating...</>}</>;
};

export default Auth;
