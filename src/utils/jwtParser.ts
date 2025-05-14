import { InvalidTokenError, jwtDecode } from 'jwt-decode';
import { getLocalData, removeLocalData } from './localData.utils';
import { TUserDetails } from '../types/baseTypes';
import AuthUrlProvider from './authUrlProvider';

export const jwtParser = (): TUserDetails | null => {
    const identityProvider = sessionStorage.getItem('identityProvider');
    if (!identityProvider) {
        return null; // no identity provider has been chosen by the user yet
    }
    const authUrls = new AuthUrlProvider().getAuthUrls(identityProvider);
    const token = getLocalData(authUrls.tokenToSendToFhirServer || 'jwt');
    if (!token) {
        return null;
    }
    try {
        // calculating scope
        const decodedToken: any = jwtDecode(token);

        if (decodedToken.exp < new Date().getTime() / 1000) {
            removeLocalData('jwt');
            return null;
        }
        let scope: string =
            (decodedToken.scope ? decodedToken.scope : decodedToken[`${authUrls.customScope}`]) || '';

        // split customGroup into a string array on comma
        const customGroupArray: string[] = authUrls.customGroup ? authUrls.customGroup.split(',') : [];
        // see if any of the custom groups are in the token
        const groupsInToken: string[] = customGroupArray
            .map((group) => decodedToken[`${group}`] || null)
            .filter((g) => g !== null);
        // adding custom groups to the scope
        scope = (scope ? scope + ' ' : '') + groupsInToken.join(' ');

        // checking admin scopes
        const isAdmin: boolean = scope.split(' ').some((s) => s.startsWith('admin/'));

        // check if any of the custom usernames are in the token
        const customUserNameArray: string[] = authUrls.customUserName ? authUrls.customUserName.split(',') : [];
        // see if any of the custom groups are in the token
        const userNameInToken: string | undefined = customUserNameArray
            .map((group) => decodedToken[`${group}`] || null)
            .filter((u) => u !== null)
            .pop();

        return {
            scope,
            username: userNameInToken || decodedToken.username,
            isAdmin,
        };
    } catch (err) {
        if (err instanceof InvalidTokenError) {
            return null;
        }
        throw err;
    }
};
