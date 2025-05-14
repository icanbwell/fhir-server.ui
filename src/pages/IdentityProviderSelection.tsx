import React from 'react';
import { useNavigate } from 'react-router-dom';

const IdentityProviderSelection = () => {
    const navigate = useNavigate();

    const handleProviderSelection = (provider: string) => {
        // Redirect to the Auth page with the selected provider
        navigate(`/authcallback?provider=${provider}`);
    };

    return (
        <div>
            <h1>Select Identity Provider</h1>
            <button onClick={() => handleProviderSelection('okta')}>Login with Okta</button>
            <button onClick={() => handleProviderSelection('google')}>Login with Google</button>
            <button onClick={() => handleProviderSelection('azure')}>Login with Azure</button>
        </div>
    );
};

export default IdentityProviderSelection;
