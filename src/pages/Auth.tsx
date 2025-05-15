import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { setLocalData } from '../utils/localData.utils';
import UserContext from '../context/UserContext';
import { jwtParser } from '../utils/jwtParser';
import { Buffer } from 'buffer';
import AuthServiceFactory from '../services/AuthServiceFactory';
import { IAuthService } from '../services/IAuthService';

const Auth = () => {
    const { setUserDetails } = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const [isProcessing, setIsProcessing] = useState(false);
    const authService: IAuthService = AuthServiceFactory.getAuthService();

    const redirectToLogin = async () => {
        if (isProcessing) {
            return;
        }

        const identityProvider = sessionStorage.getItem('identityProvider');
        if (!identityProvider) {
            console.error('No identity provider found in session storage');
            return;
        }

        setIsProcessing(true);

        try {
            const resourceUrl = location.state?.resourceUrl || '/';
            window.location.href = await authService.getLoginUrlAsync(identityProvider, resourceUrl); // Use React Router's navigate for redirection
        } catch (error) {
            console.error('Redirect to login failed', error);
            setIsProcessing(false);
        }
    };

    const fetchToken = async (code: string) => {
        if (isProcessing) {
            return;
        }

        setIsProcessing(true);

        const identityProvider = sessionStorage.getItem('identityProvider');
        if (!identityProvider) {
            console.error('No identity provider found in session storage');
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
            navigate(resourceUrl, { replace: true });
        } catch (error) {
            console.error('Token fetch error:', error);
            setIsProcessing(false);
        }
    };

    useEffect(() => {
        setIsProcessing(false);

        const code = queryParams.get('code');
        if (!code) {
            redirectToLogin().catch(console.error);
        } else {
            fetchToken(code).catch(console.error);
        }
    }, [location]);

    return <>Authenticating...</>;
};

export default Auth;
