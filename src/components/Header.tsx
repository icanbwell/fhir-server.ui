import React, { useContext, useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Popover } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import BwellIcon from '../dist/images/bwell.png';
import EnvContext from '../context/EnvironmentContext';
import UserContext from '../context/UserContext';
import { removeLocalData } from '../utils/localData.utils';
import AuthUrlProvider from '../utils/authUrlProvider';

const Header = () => {
    const env = useContext(EnvContext);
    const { userDetails, setUserDetails } = useContext(UserContext);
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLogout = () => {
        try {
            // Retrieve ID token from local storage
            const idToken = localStorage.getItem('id_token');

            const identityProvider = sessionStorage.getItem('identityProvider');
            if (identityProvider) {
                const authUrls = new AuthUrlProvider().getAuthUrls(identityProvider);

                // Construct logout parameters
                const logoutParams = new URLSearchParams({
                    client_id: authUrls.clientId,
                    post_logout_redirect_uri: window.location.origin,
                });

                // Add ID token hint if available
                if (idToken) {
                    logoutParams.set('id_token_hint', idToken);
                }

                // Clear local storage and user details
                removeLocalData('jwt');
                localStorage.removeItem('id_token');

                // Clear user context
                if (setUserDetails) {
                    setUserDetails(null);
                }
                // Construct full logout URL
                const logoutUrl = `${authUrls.logoutUrl}?${logoutParams.toString()}`;

                // Redirect to Okta logout
                window.location.replace(logoutUrl);
            }
        } catch (error) {
            console.error('Logout failed', error);

            // Fallback logout
            removeLocalData('jwt');
            localStorage.removeItem('id_token');

            if (setUserDetails) {
                setUserDetails(null);
            }

            // Redirect to home or login page
            window.location.replace(window.location.origin);
        }
    };

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="home" id="home" component={Link} to="/">
                        <img src={BwellIcon} alt="b.well Icon" style={{ height: 28 }} />
                    </IconButton>

                    <Typography variant="h5" style={{ flexGrow: 1, fontWeight: 500 }}>
                        FHIR Server
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="information"
                        id="appInfo"
                        onMouseEnter={handlePopoverOpen}
                    >
                        <InfoIcon />
                    </IconButton>
                    <Popover
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={() => setAnchorEl(null)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <Typography sx={{ p: 1, minWidth: '10rem' }}>
                            FHIR App: {env.FHIR_APP_VERSION}
                            <br />
                            FHIR Server: {env.getFhirServerVersion()}
                        </Typography>
                    </Popover>
                    {userDetails && (
                        <Button
                            color="inherit"
                            startIcon={<LogoutIcon />}
                            id="btnLogout"
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default Header;
