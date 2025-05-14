export interface IAuthService {
    // eslint-disable-next-line no-unused-vars
    getLoginUrl(identityProvider: string, resourceUrl: string): Promise<string>;

    // eslint-disable-next-line no-unused-vars
    fetchToken(identityProvider: string, code: string, resourceUrl: string): Promise<any>;
}
