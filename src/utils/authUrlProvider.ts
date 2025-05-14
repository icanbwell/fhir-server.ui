class AuthUrlProvider {
    getAuthUrls(provider: string): { authorizeUrl: string; tokenUrl: string } {
        const authorizeUrl = process.env[`REACT_APP_${provider.toUpperCase()}_AUTHORIZE_URL`];
        const tokenUrl = process.env[`REACT_APP_${provider.toUpperCase()}_TOKEN_URL`];

        if (!authorizeUrl || !tokenUrl) {
            throw new Error(`Missing environment variables for provider: ${provider}`);
        }

        return { authorizeUrl, tokenUrl };
    }
}

export default AuthUrlProvider;
