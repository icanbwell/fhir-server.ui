import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.css';

import { getLocalData } from '../utils/localData.utils';
import EnvironmentContext from '../context/EnvironmentContext';

const GraphiQLComponent = () => {
    const { fhirUrl } = useContext(EnvironmentContext);
    const location = useLocation();

    let urlSuffix = location.pathname;
    if (urlSuffix.includes('$graphqlv2')) {
        urlSuffix = '/4_0_0' + urlSuffix;
    }

    const fetcher = createGraphiQLFetcher({
        url: fhirUrl + urlSuffix,
        headers: {
            'Authorization': `Bearer ${getLocalData('jwt')}`
        }
    });

    return (
        <div style={{ height: '100vh' }}>
            <GraphiQL fetcher={fetcher} />
        </div>
    );
};

export default GraphiQLComponent;
