import React, { useContext, useEffect, useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import AdminApi from '../api/adminApi';
import EnvironmentContext from '../EnvironmentContext';
import PreJson from '../components/PreJson';
import { useLocation } from 'react-router-dom';

const PersonPatientLinkPage: React.FC = () => {
    const { fhirUrl } = useContext(EnvironmentContext);
    const [bwellPersonId, setBwellPersonId] = useState('');
    const [externalPersonId, setExternalPersonId] = useState('');
    const [patientId, setPatientId] = useState('');
    const [personId, setPersonId] = useState('');
    const [results, setResults] = useState('');

    const handleShowLinkGraph = async (event: React.FormEvent) => {
        event.preventDefault();
        const data = await new AdminApi({fhirUrl}).showPersonToPersonLink(bwellPersonId);
        setResults(data.json);
    };

    const handleCreatePersonToPersonLink = async (event: React.FormEvent) => {
        event.preventDefault();
        const data = await new AdminApi({fhirUrl}).createPersonToPersonLink(
            bwellPersonId,
            externalPersonId,
        );
        setResults(data.json);
    };

    const handleRemovePersonToPersonLink = async (event: React.FormEvent) => {
        event.preventDefault();
        const data = await new AdminApi({fhirUrl}).removePersonToPersonLink(
            bwellPersonId,
            externalPersonId,
        );
        setResults(data.json);
    };

    const handleCreatePersonToPatientLink = async (event: React.FormEvent) => {
        event.preventDefault();
        const data = await new AdminApi({fhirUrl}).createPersonToPatientLink(
            externalPersonId,
            patientId,
        );
        setResults(data.json);
    };

    const handleDeletePerson = async (event: React.FormEvent) => {
        event.preventDefault();
        const data = await new AdminApi({fhirUrl}).deletePerson(personId);
        setResults(data.json);
    };

    const location = useLocation();
    useEffect(() => {
        if (location.state?.bwellPersonId) {
            setBwellPersonId(location.state.bwellPersonId);
            new AdminApi({ fhirUrl })
                .showPersonToPersonLink(location.state.bwellPersonId)
                .then((data: any) => setResults(data.json));
        }
    }, [location.state]);

    return (
        <Container>
            <Typography variant="h3">Show Link Graph from b.well Person</Typography>
            <Typography variant="h6">
                See linked Person and Patient resources from a b.well Person (recursive)
            </Typography>
            <form onSubmit={handleShowLinkGraph}>
                <TextField
                    label="b.well Person"
                    value={bwellPersonId}
                    onChange={(e) => setBwellPersonId(e.target.value)}
                />
                <Button type="submit">Show Link Graph</Button>
            </form>
            <PreJson data={results} />
            <hr />
            <Typography variant="h3">Create Person to Person Link</Typography>
            <Typography variant="h6">
                Add a link from one Person resource to another Person resource
            </Typography>
            <form onSubmit={handleCreatePersonToPersonLink}>
                <TextField
                    label="b.well Person"
                    value={bwellPersonId}
                    onChange={(e) => setBwellPersonId(e.target.value)}
                />
                <TextField
                    label="External Person"
                    value={externalPersonId}
                    onChange={(e) => setExternalPersonId(e.target.value)}
                />
                <Button type="submit">Create Link</Button>
            </form>
            <PreJson data={results} />
            <hr />
            <Typography variant="h3">Remove Person to Person Link</Typography>
            <Typography variant="h6">
                Remove a link from one Person resource to another Person resource
            </Typography>
            <form onSubmit={handleRemovePersonToPersonLink}>
                <TextField
                    label="b.well Person"
                    value={bwellPersonId}
                    onChange={(e) => setBwellPersonId(e.target.value)}
                />
                <TextField
                    label="External Person"
                    value={externalPersonId}
                    onChange={(e) => setExternalPersonId(e.target.value)}
                />
                <Button type="submit">Remove Link</Button>
            </form>
            <PreJson data={results} />
            <hr />
            <Typography variant="h3">Create Person to Patient Link</Typography>
            <Typography variant="h6">
                Create a link from one Person resource to a Patient resource. Leave
                External Person blank to create a new Person resource with same meta
                tags as the Patient resource
            </Typography>
            <form onSubmit={handleCreatePersonToPatientLink}>
                <TextField
                    label="External Person (leave blank to create new)"
                    value={externalPersonId}
                    onChange={(e) => setExternalPersonId(e.target.value)}
                />
                <TextField
                    label="Patient"
                    value={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                />
                <Button type="submit">Create Link</Button>
            </form>
            <PreJson data={results} />
            <hr />
            <Typography variant="h3">Delete b.well Person</Typography>
            <Typography variant="h6">
                Delete a Person record (And remove links from other Person records)
            </Typography>
            <form onSubmit={handleDeletePerson}>
                <TextField
                    label="Person"
                    value={personId}
                    onChange={(e) => setPersonId(e.target.value)}
                />
                <Button type="submit">Delete Person</Button>
            </form>
            <PreJson data={results}/>
        </Container>
    );
};

export default PersonPatientLinkPage;
