import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EnvContext from '../context/EnvironmentContext';
import AdminApi from '../api/adminApi';

const SynchronizeIndexes = () => {
    const { fhirUrl } = useContext(EnvContext);
    const navigate = useNavigate();
    const location = useLocation();
    const adminApi = new AdminApi({ fhirUrl });

    useEffect(() => {
        adminApi.indexApi(location.pathname, location.search.includes('audit')).then(() => {
            setTimeout(() => navigate('/admin'), 5000);
        });
    }, []);

    return <>Started Synchronizing indexes. Web page redirects after 5 seconds.</>;
};

export default SynchronizeIndexes;
