import React, { useContext, useState } from 'react';
import { Button, TextField } from '@mui/material';
import AdminApi from '../api/adminApi';
import EnvironmentContext from '../EnvironmentContext';
import PreJson from '../components/PreJson';

const SearchLogsPage: React.FC = () => {
    const { fhirUrl, setIsLoggedIn } = useContext(EnvironmentContext);
    const [id, setId] = useState<string>('');
    const [results, setResults] = useState<String | Object | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const data: any = await new AdminApi({ fhirUrl, setIsLoggedIn }).searchLogs(id);
        setResults(data.json);
    };

    return (
        <main>
            <h1>Search Logs</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="id"
                    variant="outlined"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    style={{ width: '50em' }}
                />
                <br />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
            <PreJson data={results} />
        </main>
    );
};

export default SearchLogsPage;
