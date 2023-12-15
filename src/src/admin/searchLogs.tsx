import React, { useContext, useState } from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';
import AdminApi from '../api/adminApi';
import EnvironmentContext from '../EnvironmentContext';
import PreJson from '../components/PreJson';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SearchLogsPage: React.FC = () => {
    const { fhirUrl, setIsLoggedIn } = useContext(EnvironmentContext);
    const adminApi = new AdminApi({ fhirUrl, setIsLoggedIn });
    const [id, setId] = useState<string>('');
    const [results, setResults] = useState<String | Object | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const data: any = await adminApi.searchLogs(id);
        setResults(data.json);
    };

    return (
        <Container maxWidth={false}>
            <div style={{ minHeight: '92vh' }}>
                <Header />
                <Typography variant='h5' sx={{ mt: 2 }}>Search Logs</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        required
                        variant="outlined"
                        label="Enter requestId to search"
                        value={id}
                        onChange={(e) => setId(e.target.value.split(' ').join(''))}
                        sx={{ minWidth: '22rem', mr: 2, mt: 1 }}
                        size='small'
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size='medium'
                        sx={{ minWidth: '7rem', mt: 1 }}
                    >
                        Search
                    </Button>
                </form>
                <PreJson data={results} />
            </div>
            <Footer />
        </Container>
    );
};

export default SearchLogsPage;
