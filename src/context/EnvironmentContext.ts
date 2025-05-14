import { createContext } from 'react';
import FhirApi from '../api/fhirApi';

let fhirServerversion = 'null';
new FhirApi({ fhirUrl: process.env.REACT_APP_FHIR_SERVER_URL, setUserDetails: undefined })
    .getVersion()
    .then((version: string) => (fhirServerversion = version));

const EnvContext = createContext<{
    fhirUrl: string;
    fhirAdminUrl: string;
    AUTH_CUSTOM_GROUP: string;
    AUTH_CUSTOM_SCOPE: string;
    AUTH_CODE_FLOW_CLIENT_ID: string;
    AUTH_CODE_FLOW_TOKEN_URL: string;
    AUTH_CODE_FLOW_AUTHORIZE_URL: string;
    AUTH_CODE_FLOW_LOGOUT_URL: string;
    AUTH_WELL_KNOWN_URL: string;
    AUTH_CODE_FLOW_REDIRECT_URL: string;
    FHIR_APP_VERSION: string;
    getFhirServerVersion:() => string;
}>({
    fhirUrl: process.env.REACT_APP_FHIR_SERVER_URL || '',
    fhirAdminUrl: process.env.REACT_APP_FHIR_ADMIN_URL || '',
    AUTH_CUSTOM_GROUP: process.env.REACT_APP_AUTH_CUSTOM_GROUP || '',
    AUTH_CUSTOM_SCOPE: process.env.REACT_APP_AUTH_CUSTOM_SCOPE || '',
    AUTH_CODE_FLOW_CLIENT_ID: process.env.REACT_APP_AUTH_CODE_FLOW_CLIENT_ID || '',
    AUTH_CODE_FLOW_TOKEN_URL: process.env.REACT_APP_AUTH_CODE_FLOW_TOKEN_URL || '',
    AUTH_CODE_FLOW_AUTHORIZE_URL: process.env.REACT_APP_AUTH_CODE_FLOW_AUTHORIZE_URL || '',
    AUTH_CODE_FLOW_LOGOUT_URL: process.env.REACT_APP_AUTH_CODE_FLOW_LOGOUT_URL || '',
    FHIR_APP_VERSION: process.env.FHIR_APP_VERSION || 'null',
    AUTH_WELL_KNOWN_URL: process.env.REACT_APP_AUTH_WELL_KNOWN_URL || '',
    AUTH_CODE_FLOW_REDIRECT_URL: process.env.REACT_APP_AUTH_CODE_FLOW_REDIRECT_URL || '',
    getFhirServerVersion: () => fhirServerversion,
});

export default EnvContext;
