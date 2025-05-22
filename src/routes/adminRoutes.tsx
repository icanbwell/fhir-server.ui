import { Route } from 'react-router-dom';

import PersonMatchPage from '../admin/personMatch';
import PatientDataPage from '../admin/patientData';
import PersonPatientLinkPage from '../admin/personPatientLink';
import SearchLogsPage from '../admin/searchLogs';
import Indexes from '../admin/indexes';
import SynchronizeIndexes from '../admin/synchronizeIndexes';
import ManageExport from '../admin/manageExport';

export default [
    <Route key="personMatch" path="/admin/personMatch/*" element={<PersonMatchPage />} />,
    <Route key="patientData" path="/admin/patientData/*" element={<PatientDataPage />} />,
    <Route key="personPatientLink" path="/admin/personPatientLink/*" element={<PersonPatientLinkPage />} />,
    <Route key="searchLog" path="/admin/searchLog/*" element={<SearchLogsPage />} />,
    <Route key="searchLogResults" path="/admin/searchLogResults/*" element={<SearchLogsPage />} />,
    <Route key="indexes" path="/admin/indexes/*" element={<Indexes />} />,
    <Route key="indexProblems" path="/admin/indexProblems/*" element={<Indexes />} />,
    <Route key="synchronizeIndexes" path="/admin/synchronizeIndexes/*" element={<SynchronizeIndexes />} />,
    <Route key="manageExport" path="/admin/:resourceType/:id?/*" element={<ManageExport />} />,
];
