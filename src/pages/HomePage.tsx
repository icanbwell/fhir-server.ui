// HomePage.js
import { useContext, useEffect, useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    Container,
    Paper,
    Button,
    TextField,
    Box,
} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import UserContext from '../context/UserContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { resourceDefinitions } from '../utils/resourceDefinitions';

const Home = () => {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const { userDetails } = useContext(UserContext);

    // Debounce search term
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 300); // 300ms debounce

        return () => clearTimeout(handler);
    }, [searchTerm]);

    // Filter resources by name, startsWith
    const resourcesToDisplay = useMemo(() => {
        if (!debouncedSearch) {
            return resourceDefinitions;
        }
        return resourceDefinitions.filter((resource) =>
            resource.name.toLowerCase().indexOf(debouncedSearch.toLowerCase()) !== -1
        );
    }, [debouncedSearch]);

    useEffect(() => {
        document.title = 'Helix FHIR Server';
    }, []);

    return (
        <Container maxWidth={false}>
            <div style={{ minHeight: '92vh' }}>
                <Header />
                <br />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 2,
                        width: '100%',
                    }}
                >
                    <TextField
                        label="Search Resource Name"
                        variant="outlined"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        sx={{ width: '50vw' }}
                    />
                    {userDetails?.isAdmin && (
                        <Button
                            variant="contained"
                            component={Link}
                            to="/admin"
                            sx={{ ml: 2, height: '40px' }}
                        >
                            Visit Admin Dashboard
                        </Button>
                    )}
                </Box>
                <TableContainer component={Paper} variant="outlined">
                    <Table stickyHeader className="sticky-table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Resource</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {resourcesToDisplay.map((resource) => (
                                <TableRow
                                    key={resource.name}
                                    onClick={() => {
                                        navigate(`/4_0_0/${resource.name}/_search`);
                                    }}
                                    className='home-row'
                                >
                                    <TableCell>{resource.name}</TableCell>
                                    <TableCell className="pe-5 position-relative">
                                        {resource.description}
                                    </TableCell>
                                    <TableCell>
                                        <IconButton
                                            title={`FHIR Specification for ${resource.name}`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Link
                                                to={resource.url}
                                                className="description-icon"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <DescriptionIcon />
                                            </Link>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Footer />
        </Container>
    );
};

export default Home;
