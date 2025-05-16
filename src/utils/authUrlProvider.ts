import {
    WellKnownConfigurationInfo,
    WellKnownConfigurationService,
} from '../services/WellKnownConfigurationService';

class AuthUrlProvider {
    async getAuthUrlsAsync(provider: string): Promise<{
        authorizeUrl: string;
        tokenUrl: string;
        logoutUrl?: string;
        wellKnownUrl?: string;
    }> {
        const wellKnownUrl = process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_WELL_KNOWN_URL`];
        let authorizeUrl: string | undefined;
        let tokenUrl: string | undefined;
        let logoutUrl: string | undefined;
        // if wellKnownUrl is defined, use it to get the authorizeUrl and tokenUrl
        if (wellKnownUrl) {
            const wellKnownConfigurationService: WellKnownConfigurationService =
                new WellKnownConfigurationService({});
            const wellKnownConfig: WellKnownConfigurationInfo =
                await wellKnownConfigurationService.fetchConfigurationAsync(wellKnownUrl);
            authorizeUrl = wellKnownConfig.authorization_endpoint;
            tokenUrl = wellKnownConfig.token_endpoint;
            logoutUrl = wellKnownConfig.end_session_endpoint;
        } else {
            // otherwise, use the environment variables
            authorizeUrl = process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_AUTHORIZE_URL`];
            tokenUrl = process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_TOKEN_URL`];
            logoutUrl = process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_LOGOUT_URL`];
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

        return {
            authorizeUrl,
            tokenUrl,
            logoutUrl,
            wellKnownUrl,
        };
    }

    getAuthInfo(provider: string): {
        customUserName?: string;
        customGroup?: string;
        customScope?: string;
        clientId: string;
        tokenForUserDetails: string;
        tokenToSendToFhirServer?: string;
        scopeRemovePrefix?: string[];
    } {
        const customUserName =
            process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_CUSTOM_USERNAME`];
        const customGroup = process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_CUSTOM_GROUP`];
        const customScope = process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_CUSTOM_SCOPE`];
        const clientId = process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_CLIENT_ID`];
        const tokenForUserDetails =
            process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_TOKEN_FOR_USER_DETAILS`];
        const scopeRemovePrefixValue =
            process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_REMOVE_SCOPE_PREFIX`];
        const scopeRemovePrefix = scopeRemovePrefixValue
            ? scopeRemovePrefixValue.split(',').map((s) => s.trim())
            : undefined;

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
        if (!tokenForUserDetails) {
            throw new Error(`REACT_APP_AUTH_${provider.toUpperCase()}_TOKEN_FOR_USER_DETAILS is not defined`);
        }

        let tokenToSendToFhirServer =
            process.env[`REACT_APP_AUTH_${provider.toUpperCase()}_TOKEN_TO_SEND_TO_FHIR_SERVER`];

        if (!tokenToSendToFhirServer) {
            tokenToSendToFhirServer = 'jwt';
        }

        return {
            customUserName,
            customGroup,
            customScope,
            clientId,
            tokenForUserDetails,
            tokenToSendToFhirServer,
            scopeRemovePrefix,
        };
    }
}

export default AuthUrlProvider;
