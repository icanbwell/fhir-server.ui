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
import { getLocalData } from './utils/localData.utils';
import { TUserDetails } from './types/baseTypes';
import { jwtParser } from './utils/jwtParser';

function App(): React.ReactElement {
    const env = useContext(EnvContext);
    const [isLoggedIn, setIsLoggedIn] = useState(!!getLocalData('jwt'));
    const [userDetails, setUserDetails] = useState<TUserDetails>({});

    // Changed from App to Root
    function Root() {
        return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/authcallback" element={<Auth />} />
                <Route
                    element={
                        !env.AUTH_ENABLED || isLoggedIn ? (
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
                        !env.AUTH_ENABLED || (isLoggedIn && userDetails.isAdmin) ? (
                            <Outlet />
                        ) : !isLoggedIn && env.AUTH_ENABLED ? (
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
                <Route path='/*' element={<>Invalid Route</>} />
            </Routes>
        );
    }

    const router = createBrowserRouter(
        [{ path: '*', Component: Root, errorElement: <ErrorPage /> }],
        { basename: '/' }
    );

    useEffect(() => {
        setUserDetails(
            jwtParser({
                customGroup: env.AUTH_CUSTOM_GROUP,
                customScope: env.AUTH_CUSTOM_SCOPE,
            })
        );

        console.log(`Setting fhirUrl to ${env.fhirUrl}`);
    }, []);

    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, userDetails }}>
            <RouterProvider router={router} />
        </UserContext.Provider>
    );
}

export default App;
