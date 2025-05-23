// NotFoundPage.js
import { Container } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFoundPage = () => {
    document.title = 'Helix FHIR Server';
    return (
        <Container maxWidth={false}>
            <div style={{ minHeight: '92vh' }}>
                <Header />
                <div id="not-found-page">
                    <h2>Oops!</h2>
                    <p>You seem to have entered an incorrect path.</p>
                </div>
            </div>
            <Footer />
        </Container>
    );
};

export default NotFoundPage;
