import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EnvContext from '../EnvironmentContext';

const Logout = () => {
    const {setIsLoggedIn} = useContext(EnvContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (setIsLoggedIn) {
            setIsLoggedIn(false);
        }
        navigate('/');
    }, [setIsLoggedIn]);
    return <>Redirecting</>;
};

export default Logout;
