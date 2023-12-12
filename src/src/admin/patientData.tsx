import React, { useContext, useEffect, useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import AdminApi from '../api/adminApi';
import EnvironmentContext from '../EnvironmentContext';
import PreJson from '../components/PreJson';
import { useLocation } from 'react-router-dom';

const PatientDataPage: React.FC = () => {
    const { fhirUrl } = useContext(EnvironmentContext);
    const [patientId, setPatientId] = useState('');
    const [personId, setPersonId] = useState('');
    const [results, setResults] = useState('');

    const handlePatientDataSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const data = await new AdminApi({fhirUrl}).getEverythingForPatient(patientId);
        setResults(data.json);
    };

    const handleDeletePatientDataSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const data = await new AdminApi({fhirUrl}).deletePatient(patientId);
        setResults(data.json);
    };

    const handlePersonDataSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const data = await new AdminApi({fhirUrl}).getEverythingForPerson(personId);
        setResults(data.json);
    };

    const handleDeletePersonDataSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const data = await new AdminApi({fhirUrl}).deletePerson(personId);
        setResults(data.json);
    };

    const location = useLocation();
    useEffect(() => {
        if (location.state?.personId) {
            setPersonId(location.state.personId);
            new AdminApi({fhirUrl}).deletePerson(location.state.personId).then((data: any) => {
                setResults(data.json);
            });
        }
    }, [location.state]);

    return (
        <Container maxWidth="sm">
            <Typography variant="h1">Patient</Typography>
            <Typography variant="h3">Show Patient Data Graph</Typography>
            <Typography variant="h6">
                Shows the graph of patient data (same as $everything endpoint)
            </Typography>
            <form onSubmit={handlePatientDataSubmit}>
                <TextField
                    label="Patient Id"
                    value={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">
                    Show Patient Data
                </Button>
            </form>
            <PreJson data={results} />
            <hr />
            <Typography variant="h3">Delete Patient Data Graph</Typography>
            <Typography variant="h6">
                Deletes the graph of patient data (CONFIRM YOU ARE DOING THIS FOR THE
                CORRECT PATIENT)
            </Typography>
            <form onSubmit={handleDeletePatientDataSubmit}>
                <TextField
                    label="Patient Id"
                    value={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">
                    Delete Patient Data
                </Button>
            </form>
            <PreJson data={results} />
            <hr />
            <Typography variant="h1">Person</Typography>
            <Typography variant="h3">Show Person Data Graph</Typography>
            <Typography variant="h6">
                Shows the graph of person data (same as $everything endpoint)
            </Typography>
            <form onSubmit={handlePersonDataSubmit}>
                <TextField
                    label="Person Id"
                    value={personId}
                    onChange={(e) => setPersonId(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">
                    Show Person Data
                </Button>
            </form>
            <PreJson data={results} />
            <hr />
            <Typography variant="h3">Delete Person Data Graph</Typography>
            <Typography variant="h6">
                Deletes the graph of person data (CONFIRM YOU ARE DOING THIS FOR THE
                CORRECT PERSON)
            </Typography>
            <form onSubmit={handleDeletePersonDataSubmit}>
                <TextField
                    label="Person Id"
                    value={personId}
                    onChange={(e) => setPersonId(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">
                    Delete Person Data
                </Button>
            </form>
            <PreJson data={results} />
        </Container>
    );
};

export default PatientDataPage;
