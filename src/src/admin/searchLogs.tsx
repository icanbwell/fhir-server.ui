import React, { useContext, useState } from 'react';
import { Button, TextField } from '@mui/material';
import AdminApi from '../utils/adminApi';
import EnvironmentContext from '../EnvironmentContext';

const SearchLogsPage: React.FC = () => {
  const { fhirUrl } = useContext(EnvironmentContext);
  const [id, setId] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await new AdminApi(fhirUrl).searchLogs(id);
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
    </main>
  );
};

export default SearchLogsPage;
