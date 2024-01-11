import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Buffer } from 'buffer';
import EnvironmentContext from '../context/EnvironmentContext';
import { getLocalData, setLocalData } from '../utils/localData.utils';
import UserContext from '../context/UserContext';

const Auth = () => {
    const env = useContext(EnvironmentContext);
    const { setIsLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(window.location.search);

    const redirectToLogin = (query: URLSearchParams) => {
        // redirect to resourceUrl if we are already on authcallback and state is present and jwt is added to localstorage
        if (
            queryParams.has('state') &&
            window.location.pathname.includes('authcallback') &&
            getLocalData('jwt')
        ) {
            const resourceUrl = Buffer.from(queryParams.get('state') || '/', 'base64').toString(
                'ascii'
            );
            navigate(resourceUrl, { replace: true });
        } else {
            const resourceUrl = Buffer.from(
                `${window.location.pathname}${queryParams.size ? '?' : ''}${queryParams.toString()}`
            ).toString('base64');
            query.set('response_type', 'code');
            query.set('state', resourceUrl);

            // state parameter determines the url that Cognito redirects to: https://docs.aws.amazon.com/cognito/latest/developerguide/authorization-endpoint.html
            window.location.replace(`${env.AUTH_CODE_FLOW_URL}/login?${query.toString()}`);
        }
    };

    const fetchToken = (query: URLSearchParams) => {
        // if code is present then fetch the JWT token and save it into the localStorage
        const state = queryParams.get('state');
        const resourceUrl = state ? Buffer.from(state, 'base64').toString('ascii') : '/';
        const tokenUrl = `${env.AUTH_CODE_FLOW_URL}/oauth2/token`;

        query.set('grant_type', 'authorization_code');

        const queryString = query.toString();

        axios
            .request({
                url: tokenUrl,
                method: 'post',
                data: queryString,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
            .then((res) => {
                setLocalData('jwt', res.data.access_token);
                if (setIsLoggedIn) {
                    setIsLoggedIn(true);
                }
                // redirect to the url user is trying to access and replace it with current url
                navigate(resourceUrl, { replace: true });
            })
            .catch((err) => {
                console.log(err);
                // redirect to login page credentials might be incorrect
                redirectToLogin(query);
            });
    };

    useEffect(() => {
        if (!env) {
            return;
        }
        const code = queryParams.get('code');
        const redirectUri = `${window.location.origin}/authcallback`;

        // Add common queryParams into the query
        const query = new URLSearchParams();
        query.set('client_id', env.AUTH_CODE_FLOW_CLIENT_ID);
        query.set('redirect_uri', redirectUri);

        // if code is not present in the queryParams then this if the first redirect send to login page
        if (!code) {
            redirectToLogin(query);
        } else {
            query.set('code', code);
            fetchToken(query);
        }
    }, []);

    return <>Redirecting...</>;
};

export default Auth;
