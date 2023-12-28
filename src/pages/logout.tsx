import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeLocalData } from '../utils/localData.utils';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        removeLocalData('jwt');
        navigate('/');
    }, []);

    return <>Redirecting</>;
};

export default Logout;
