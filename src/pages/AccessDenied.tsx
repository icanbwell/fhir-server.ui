// AccessDenied.js
import { Container } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AccessDenied = () => {
    document.title = 'Helix FHIR Server';
    return (
        <Container maxWidth={false}>
            <div style={{ minHeight: '92vh' }}>
                <Header />
                <div id="access-denied-page">
                    <h2>Access Denied</h2>
                    <p>You do not have permission to view this page.</p>
                </div>
            </div>
            <Footer />
        </Container>
    );
};

export default AccessDenied;
