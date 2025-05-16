import { createContext } from 'react';
import FhirApi from '../api/fhirApi';

let fhirServerVersion = 'null';
new FhirApi({ fhirUrl: process.env.REACT_APP_FHIR_SERVER_URL, setUserDetails: undefined })
    .getVersion()
    .then((version: string) => (fhirServerVersion = version));

const EnvContext = createContext<{
    fhirUrl: string;
    fhirAdminUrl: string;
    AUTH_PROVIDERS: string;
    FHIR_APP_VERSION: string;
    getFhirServerVersion:() => string;
}>({
    fhirUrl: process.env.REACT_APP_FHIR_SERVER_URL || '',
    fhirAdminUrl: process.env.REACT_APP_FHIR_ADMIN_URL || '',
    AUTH_PROVIDERS: process.env.REACT_APP_AUTH_PROVIDERS || '',
    FHIR_APP_VERSION: process.env.REACT_APP_VERSION || 'null',
    getFhirServerVersion: () => fhirServerVersion,
});

export default EnvContext;
