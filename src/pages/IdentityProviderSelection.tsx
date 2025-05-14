import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IdentityProviderSelection = () => {
    const navigate = useNavigate();

    const handleProviderSelection = (provider: string) => {
        sessionStorage.setItem('identityProvider', provider);
        navigate('/authcallback');
    };

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
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mb: 2, width: '100%' }}
                        onClick={() => handleProviderSelection('okta')}
                    >
                        Login with Okta
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ width: '100%' }}
                        onClick={() => handleProviderSelection('cognito')}
                    >
                        Login with Cognito
                    </Button>
                </Box>
            </Container>
            <Footer />
        </Container>
    );
};

export default IdentityProviderSelection;
