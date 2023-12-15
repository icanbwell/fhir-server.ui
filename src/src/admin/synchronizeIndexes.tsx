import { useContext, useEffect } from 'react';
import EnvContext from '../EnvironmentContext';
import AdminApi from '../api/adminApi';
import { useNavigate } from 'react-router-dom';

const SynchronizeIndexes = () => {
    const { fhirUrl, setIsLoggedIn } = useContext(EnvContext);
    const navigate = useNavigate();
    const adminApi = new AdminApi({ fhirUrl, setIsLoggedIn });

    useEffect(() => {
        adminApi.indexApi(location.pathname, location.search.includes('audit')).then(() => {
            setTimeout(() => navigate('/admin'), 5000);
        });
    }, []);

    return <>Started Synchronizing indexes. Web page redirects after 5 seconds.</>;
};

export default SynchronizeIndexes;
