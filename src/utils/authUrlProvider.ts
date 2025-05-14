class AuthUrlProvider {
    getAuthUrls(provider: string): {
        customUserName?: string;
        customGroup?: string;
        customScope?: string;
        clientId: string;
        authorizeUrl: string;
        tokenUrl: string;
        logoutUrl?: string;
        wellKnownUrl?: string;
        tokenToSendToFhirServer?: string;
    } {
        const customUserName =
            process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_CUSTOM_USERNAME`];
        const customGroup = process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_CUSTOM_GROUP`];
        const customScope = process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_CUSTOM_SCOPE`];
        const clientId = process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_CLIENT_ID`];
        const authorizeUrl = process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_AUTHORIZE_URL`];
        const tokenUrl = process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_TOKEN_URL`];
        const logoutUrl = process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_LOGOUT_URL`];
        const wellKnownUrl = process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_WELL_KNOWN_URL`];
        const tokenToSendToFhirServer =
            process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_TOKEN_TO_SEND_TO_FHIR_SERVER`];

        if (!customUserName) {
            throw new Error(
                `REACT_APP_AUTH_${provider.toUpperCase()}_CUSTOM_USERNAME is not defined`
            );
        }
        if (!customGroup) {
            throw new Error(`REACT_APP_AUTH_${provider.toUpperCase()}_CUSTOM_GROUP is not defined`);
        }
        if (!customScope) {
            throw new Error(`REACT_APP_AUTH_${provider.toUpperCase()}_CUSTOM_SCOPE is not defined`);
        }
        if (!clientId) {
            throw new Error(`REACT_APP_AUTH_${provider.toUpperCase()}_CLIENT_ID is not defined`);
        }
        if (!authorizeUrl) {
            throw new Error(
                `REACT_APP_AUTH_${provider.toUpperCase()}_AUTHORIZE_URL is not defined`
            );
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
            throw new Error(
                `REACT_APP_AUTH_${provider.toUpperCase()}_TOKEN_TO_SEND_TO_FHIR_SERVER is not defined`
            );
        }

        return {
            customUserName,
            customGroup,
            customScope,
            clientId,
            authorizeUrl,
            tokenUrl,
            logoutUrl,
            wellKnownUrl,
            tokenToSendToFhirServer,
        };
    }
}

export default AuthUrlProvider;
