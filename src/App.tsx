import './App.css';
import React, { useContext, useEffect, useState } from 'react';
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
import AdminRoutes from './routes/adminRoutes';
import FhirRoutes from './routes/fhirRoutes';
import EnvContext from './context/EnvironmentContext';
import UserContext from './context/UserContext';
import { TUserDetails } from './types/baseTypes';
import { jwtParser } from './utils/jwtParser';

function App(): React.ReactElement {
    const env = useContext(EnvContext);
    const [userDetails, setUserDetails] = useState<TUserDetails|null>(null);

    // Changed from App to Root
    function Root() {
        return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/authcallback" element={<Auth />} />
                <Route
                    element={
                        !env.AUTH_ENABLED || userDetails ? (
                            <Outlet />
                        ) : (
                            <Navigate
                                to="/authcallback"
                                state={{ resourceUrl: window.location.href }}
                            />
                        )
                    }
                    children={FhirRoutes}
                />
                <Route
                    element={
                        !env.AUTH_ENABLED || userDetails?.isAdmin ? (
                            <Outlet />
                        ) : !userDetails && env.AUTH_ENABLED ? (
                            <Navigate
                                to="/authcallback"
                                state={{ resourceUrl: window.location.href }}
                            />
                        ) : (
                            <>Access Denied</>
                        )
                    }
                    children={AdminRoutes}
                />
                <Route path="/*" element={<>Invalid Route</>} />
            </Routes>
        );
    }

    const router = createBrowserRouter(
        [{ path: '*', Component: Root, errorElement: <ErrorPage /> }],
        { basename: '/' }
    );

    useEffect(() => {
        const parsedJwt = jwtParser({
            customGroup: env.AUTH_CUSTOM_GROUP,
            customScope: env.AUTH_CUSTOM_SCOPE,
        });
        setUserDetails(parsedJwt);

        console.log(`Setting fhirUrl to ${env.fhirUrl}`);
    }, []);

    return (
        <UserContext.Provider value={{ userDetails, setUserDetails }}>
            <RouterProvider router={router} />
        </UserContext.Provider>
    );
}

export default App;
