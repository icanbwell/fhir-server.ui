import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EnvContext from '../context/EnvironmentContext';

const IdentityProviderSelection = () => {
    const env = useContext(EnvContext);
    const navigate = useNavigate();
    const location = useLocation();
    const referringUrl = location.state?.resourceUrl || '/'; // Default to '/' if no referring URL is provided

    console.log('Referring URL:', referringUrl);

    const handleProviderSelection = (provider: string) => {
        localStorage.setItem('identityProvider', provider);
        navigate('/authcallback', { state: { resourceUrl: referringUrl } });
    };

    const providers: string[] = env.AUTH_PROVIDERS.split(',').map((s) => s.trim());

    return (
        <Container maxWidth={false}>
            <Header />
            <Container
                maxWidth="sm"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '60vh',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Select Identity Provider
                </Typography>
                <Box sx={{ mt: 4 }}>
                    {providers.map((provider) => (
                        <Button
                            key={provider}
                            variant="contained"
                            color={provider.toLowerCase() === 'okta' ? 'primary' : 'secondary'}
                            sx={{ mb: 2, width: '100%' }}
                            onClick={() => handleProviderSelection(provider)}
                        >
                            Login with {provider.charAt(0).toUpperCase() + provider.slice(1)}
                        </Button>
                    ))}
                </Box>
            </Container>
            <Footer />
        </Container>
    );
};

export default IdentityProviderSelection;
