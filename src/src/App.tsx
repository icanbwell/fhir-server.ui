import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

import PatientChatGptPage from './PatientChatGptPage';
import ObservationGraph from './ObservationGraph';
import ObservationTimeline from './ObservationTimeline';
import PatientTimeline from './PatientTimeline';
// import AdminRoutes from './routes/adminRoutes';
// import FhirRoutes from './routes/fhirRoutes';
import AdminIndexPage from './admin';
import PersonMatchPage from './admin/personMatch';
import PatientDataPage from './admin/patientData';
import PersonPatientLinkPage from './admin/personPatientLink';
import SearchLogsPage from './admin/searchLogs';
import SearchPage from './pages/SearchPage';
import IndexPage from './pages/IndexPage';
import EnvironmentContext from './EnvironmentContext';
import axios, {AxiosResponse} from 'axios';

// import ErrorPage from './error-page';
type TApiEnvResponse = {
    FHIR_SERVER_URL: string;
    AUTH_CUSTOM_GROUP: string;
    AUTH_CUSTOM_SCOPE: string;
    status: number;
};

function App(): React.ReactElement {
    const [fhirUrl, setFhirUrl] = useState<string|undefined>(process.env.FHIR_SERVER_URL);
    const [customGroups, setCustomGroups] = useState<string|undefined>(process.env.AUTH_CUSTOM_GROUP);
    const [customScope, setCustomScope] = useState<string|undefined>(process.env.AUTH_CUSTOM_SCOPE);

    // Changed from App to Root
    function Root() {
        return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/patient" element={<PatientChatGptPage />} />
                <Route path="/pat2/:id" element={<PatientChatGptPage />} />
                <Route path="/patientTimeline" element={<PatientTimeline />} />
                <Route path="/observationGraph" element={<ObservationGraph />} />
                <Route path="/observationTimeline" element={<ObservationTimeline />} />
                <Route path="/4_0_0/:resourceType/_search/*" element={<SearchPage />} />
                <Route path="/4_0_0/:resourceType/:id?/:operation?/*" element={<IndexPage />} />
                <Route path="/4_0_0/:resourceType/:operation?/*" element={<IndexPage />} />
                <Route path="/admin" element={<AdminIndexPage />} />
                <Route path="/admin/personMatch/*" element={<PersonMatchPage />} />
                <Route path="/admin/patientData/*" element={<PatientDataPage />} />
                <Route path="/admin/personPatientLink/*" element={<PersonPatientLinkPage />} />
                <Route path="/admin/searchLog/*" element={<SearchLogsPage />} />
            </Routes>
        );
    }

    const router = createBrowserRouter([{ path: '*', Component: Root }], {
        basename: '/',
    });

    useEffect(() => {
        const fetchFhirUrl = async () => {
            // Fetching environment data from server using async/await
            try {
                const response: AxiosResponse<TApiEnvResponse> = await axios.get('/api/env');
                if (response.status !== 200) {
                    // noinspection ExceptionCaughtLocallyJS
                    throw new Error('Network response was not ok');
                }
                setFhirUrl(response.data.FHIR_SERVER_URL);
                setCustomGroups(response.data.AUTH_CUSTOM_GROUP);
                setCustomScope(response.data.AUTH_CUSTOM_SCOPE);
                console.log(`Setting fhirUrl to ${fhirUrl}`);
            } catch (error: any) {
                console.error('There was a problem with the fetch operation:', error.message);
            }
        };
        fetchFhirUrl();
    }, []);

    return (
        <EnvironmentContext.Provider value={{fhirUrl, customGroups, customScope}}>
            <RouterProvider router={router} />
        </EnvironmentContext.Provider>
    );
}

export default App;
