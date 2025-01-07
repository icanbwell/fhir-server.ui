import { Route } from 'react-router-dom';

import AboutPage from '../pages/AboutPage';
import IndexPage from '../pages/IndexPage';
import ObservationGraph from '../ObservationGraph';
import ObservationTimeline from '../ObservationTimeline';
import PatientTimeline from '../PatientTimeline';
import SearchPage from '../pages/SearchPage';

export default [
    <Route path="/about" element={<AboutPage />} />,
    <Route path="/patientTimeline" element={<PatientTimeline />} />,
    <Route path="/observationGraph" element={<ObservationGraph />} />,
    <Route path="/observationTimeline" element={<ObservationTimeline />} />,
    <Route path="/4_0_0/:resourceType/_search/*" element={<SearchPage />} />,
    <Route path="/4_0_0/:resourceType/:id?/:operation?/*" element={<IndexPage />} />,
    <Route path="/4_0_0/:resourceType/:operation?/*" element={<IndexPage />} />
];
