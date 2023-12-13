import { InvalidTokenError, jwtDecode } from 'jwt-decode';
import { getLocalData } from './localData.utils';

export const jwtParser = ({
    customGroups,
    customScope,
}: {
    customGroups: string | undefined;
    customScope: string | undefined;
}): {
    username?: string;
    scope?: string;
    isAdmin?: boolean;
} => {
    const token: string | null = getLocalData('jwt');
    if (!token) {
        return {};
    }
    try {
        // calculating scope
        const decodedToken: any = jwtDecode(token);
        let scope: string =
            (decodedToken.scope ? decodedToken.scope : decodedToken[`${customScope}`]) || '';
        scope =
            scope +
            (decodedToken[`${customGroups}`] ? decodedToken[`${customGroups}`] : []).join(' ');

        // checking admin scopes
        const isAdmin: boolean = scope.split(' ').some((s) => s.startsWith('admin/'));

        return {
            scope,
            username: decodedToken.username,
            isAdmin,
        };
    } catch (err) {
        if (err instanceof InvalidTokenError) {
            return {};
        }
        throw err;
    }
};
