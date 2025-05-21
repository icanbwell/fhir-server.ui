import './App.css';
import React, { useContext, useState } from 'react';
import {
    Routes,
    Route,
    createBrowserRouter,
    RouterProvider,
    Outlet,
    Navigate,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import Auth from './pages/Auth';
import FhirRoutes from './routes/fhirRoutes';
import EnvContext from './context/EnvironmentContext';
import UserContext from './context/UserContext';
import { TUserDetails } from './types/baseTypes';
import { jwtParser } from './utils/jwtParser';
import IdentityProviderSelection from './pages/IdentityProviderSelection';
import { useLocation } from 'react-router-dom';

function App(): React.ReactElement {
    const env = useContext(EnvContext);
    const [userDetails, setUserDetails] = useState<TUserDetails | null>(jwtParser());
    console.log(`Setting fhirUrl to ${env.fhirUrl}`);

    // Changed from App to Root
    function Root() {
        const location = useLocation();

        return (
            <Routes>
                <Route key="home" path="/" element={<HomePage />} />
                <Route key="identityProvider" path="/select-idp" element={<IdentityProviderSelection />} />
                <Route key="authcallback" path="/authcallback" element={<Auth />} />
                <Route
                    element={
                        userDetails ? (
                            <Outlet />
                        ) : (
                            <Navigate to="/select-idp" state={{ resourceUrl: `${location.pathname}${location.search}` }} />
                        )
                    }
                    children={FhirRoutes}
                    key="fhirRoutes"
                />
            </Routes>
        );
    }

    const router = createBrowserRouter(
        [{ path: '*', Component: Root, errorElement: <ErrorPage /> }],
        { basename: '/' }
    );

    return (
        <UserContext.Provider value={{ userDetails, setUserDetails }}>
            <RouterProvider router={router} />
        </UserContext.Provider>
    );
}

export default App;
