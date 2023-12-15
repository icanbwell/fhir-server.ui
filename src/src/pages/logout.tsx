import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EnvContext from '../EnvironmentContext';
import { removeLocalData } from '../utils/localData.utils';

const Logout = () => {
    const {setIsLoggedIn} = useContext(EnvContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (setIsLoggedIn) {
            setIsLoggedIn(false);
        }
        removeLocalData('jwt');
        navigate('/');
    }, [setIsLoggedIn]);
    return <>Redirecting</>;
};

export default Logout;
