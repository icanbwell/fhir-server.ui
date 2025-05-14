class AuthUrlProvider {
    getAuthUrls(provider: string): {
        authorizeUrl: string;
        tokenUrl: string;
        logoutUrl?: string;
        wellKnownUrl?: string;
        tokenToSendToFhirServer?: string;
    } {
        const authorizeUrl = process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_AUTHORIZE_URL`];
        const tokenUrl = process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_TOKEN_URL`];
        const logoutUrl = process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_LOGOUT_URL`];
        const wellKnownUrl = process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_WELL_KNOWN_URL`];
        const tokenToSendToFhirServer =
            process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_TOKEN_TO_SEND_TO_FHIR_SERVER`];

        if (!authorizeUrl) {
            throw new Error(`REACT_APP_AUTH_${provider.toUpperCase()}_AUTHORIZE_URL is not defined`);
        }
        if (!tokenUrl) {
            throw new Error(`REACT_APP_AUTH_${provider.toUpperCase()}_TOKEN_URL is not defined`);
        }
        if (!logoutUrl) {
            throw new Error(`REACT_APP_AUTH_${provider.toUpperCase()}_LOGOUT_URL is not defined`);
        }
        if (!wellKnownUrl) {
            throw new Error(`REACT_APP_AUTH_${provider.toUpperCase()}_LOGOUT_URL is not defined`);
        }
        if (!tokenToSendToFhirServer) {
            throw new Error(`REACT_APP_AUTH_${provider.toUpperCase()}_TOKEN_TO_SEND_TO_FHIR_SERVER is not defined`);
        }

        return { authorizeUrl, tokenUrl, logoutUrl, wellKnownUrl, tokenToSendToFhirServer };
    }
}

export default AuthUrlProvider;
