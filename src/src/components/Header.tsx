import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Alert } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import BwellIcon from '../dist/images/bwell.png';
import { getCookie } from '../utils/cookie.utils';
import EnvContext from '../EnvironmentContext';

const Header = () => {
    const { fhirUrl, env } = useContext(EnvContext);

    const handleLogout = () => {
        const query = new URLSearchParams();
        query.set('client_id', env.AUTH_CODE_FLOW_CLIENT_ID);
        query.set('logout_uri', `${window.location.origin}/logout`);

        // signout user from cognito
        window.location.replace(`${env.AUTH_CODE_FLOW_URL}/logout?${query.toString()}`);
    };

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="home" id="home" component={Link} to="/">
                        <img src={BwellIcon} alt="b.well Icon" style={{ height: 24 }} />
                    </IconButton>

                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        FHIR Server
                    </Typography>
                    <IconButton color="inherit" aria-label="information" id="appInfo">
                        <InfoIcon />
                    </IconButton>
                    {env?.AUTH_ENABLED && !!getCookie('jwt') && (
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
            <Alert
                severity="info"
                action={
                    <Button color="inherit" size="small">
                        <Link
                            target="_blank"
                            rel="noreferrer"
                            to={`${fhirUrl}${window.location.pathname}`}
                        >
                            Switch to Old UI
                        </Link>
                    </Button>
                }
            >
                You are using the new UI
            </Alert>
        </React.Fragment>
    );
};

export default Header;
