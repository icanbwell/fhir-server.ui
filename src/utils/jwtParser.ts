import { InvalidTokenError, jwtDecode } from 'jwt-decode';
import { getLocalData, removeLocalData } from './localData.utils';
import { TUserDetails } from '../types/baseTypes';

export const jwtParser = ({
    customUserName,
    customGroup,
    customScope,
    tokenToSendToFhirServer
}: {
    customUserName: string | undefined;
    customGroup: string | undefined;
    customScope: string | undefined;
    tokenToSendToFhirServer: string | undefined;
}): TUserDetails | null => {
    const token = getLocalData(tokenToSendToFhirServer || 'jwt');
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
            (decodedToken.scope ? decodedToken.scope : decodedToken[`${customScope}`]) || '';

        // split customGroup into a string array on comma
        const customGroupArray: string[] = customGroup ? customGroup.split(',') : [];
        // see if any of the custom groups are in the token
        const groupsInToken: string[] = customGroupArray
            .map((group) => decodedToken[`${group}`] || null)
            .filter((g) => g !== null);
        // adding custom groups to the scope
        scope = (scope ? scope + ' ' : '') + groupsInToken.join(' ');

        // checking admin scopes
        const isAdmin: boolean = scope.split(' ').some((s) => s.startsWith('admin/'));

        // check if any of the custom usernames are in the token
        const customUserNameArray: string[] = customUserName ? customUserName.split(',') : [];
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
