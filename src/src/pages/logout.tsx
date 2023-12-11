import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeCookie } from '../utils/cookie.utils';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // remove cookie from browser
        removeCookie('jwt');

        navigate('/');
    }, []);
    return <>Redirecting</>;
};

export default Logout;
