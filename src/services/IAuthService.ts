export interface IAuthService {
    // eslint-disable-next-line no-unused-vars
    getLoginUrlAsync(identityProvider: string, resourceUrl: string): Promise<string>;

    // eslint-disable-next-line no-unused-vars
    getLogoutUrlAsync(identityProvider: string): Promise<string>;

    // eslint-disable-next-line no-unused-vars
    fetchTokenAsync(identityProvider: string, code: string, resourceUrl: string): Promise<any>;
}
