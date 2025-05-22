// MessagePage.js
import { Container } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MessagePage = ({ message }: { message: string }) => {
    document.title = 'Helix FHIR Server';
    return (
        <Container maxWidth={false}>
            <div style={{ minHeight: '92vh' }}>
                <Header />
                <div id="message-page">
                    <p>{message}</p>
                </div>
            </div>
            <Footer />
        </Container>
    );
};

export default MessagePage;
