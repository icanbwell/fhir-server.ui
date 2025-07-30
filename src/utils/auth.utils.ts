import { getLocalData, removeLocalData } from './localData.utils';
import { IAuthService } from '../services/IAuthService';
import AuthServiceFactory from '../services/AuthServiceFactory';


export const removeAuthData = (): void => {
    removeLocalData('jwt');
    removeLocalData('id_token');
    removeLocalData('identityProvider');
    removeLocalData('code_verifier');
};

export const logout = async (setUserDetails?: (_userDetails: any) => void): Promise<void> => {
    try {
        const identityProvider = getLocalData('identityProvider');
        if (identityProvider) {
            const authService: IAuthService = AuthServiceFactory.getAuthService();
            // Construct full logout URL
            const logoutUrl: string = await authService.getLogoutUrlAsync(identityProvider);

            // Clear local storage and user details
            removeAuthData();

            // Clear user context
            if (setUserDetails) {
                setUserDetails(null);
            }

            // Redirect to identity provider logout
            window.location.replace(logoutUrl);
        }
        else {
            // If no identity provider is set, just clear local storage and redirect to home
            removeAuthData();
            if (setUserDetails) {
                setUserDetails(null);
            }
            window.location.replace(window.location.origin);
        }
    } catch (error) {
        console.error('Logout failed', error);

        // Fallback logout
        removeAuthData();

        if (setUserDetails) {
            setUserDetails(null);
        }

        // Redirect to home or login page
        window.location.replace(window.location.origin);
    }
};
