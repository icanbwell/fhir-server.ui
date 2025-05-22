import React, { useContext, useState, useEffect } from 'react';
import { Accordion, Box, Button, Container, LinearProgress } from '@mui/material';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import AdminApi from '../api/adminApi';
import EnvironmentContext from '../context/EnvironmentContext';
import UserContext from '../context/UserContext';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import Header from '../components/Header';
import ResourceCard from '../components/ResourceCard';
import Footer from '../components/Footer';
import SearchContainer from '../components/SearchContainer';
import { TBundle } from '../types/resources/Bundle';
import PreJson from '../components/PreJson';

const manageExportPage: React.FC = () => {

    const { fhirUrl } = useContext(EnvironmentContext);
    const { setUserDetails } = useContext(UserContext);
    const adminApi = new AdminApi({ fhirUrl, setUserDetails });
    const [resources, setResources] = useState<any>();
    const [bundle, setBundle] = useState<TBundle | undefined>();
    const [status, setStatus] = useState<number | undefined>();
    const [loading, setLoading] = useState(false);
    const [indexStart, setIndexStart] = useState(0);
    const [searchTabExpanded, setSearchTabExpanded] = useState(false);

    const navigate = useNavigate();

    const { id, resourceType = '' } = useParams();

    const handleExpand = () => {
        setSearchTabExpanded(!searchTabExpanded);
    };
    const [resourceCardExpanded, setResourceCardExpanded] = useState(false);
    const [expandAll, setExpandAll] = useState(false);
    const [collapseAll, setCollapseAll] = useState(false);

    const handleSearch = (searchFormQuery: any) => {

        /**
         * @type {URL}
         */
        const newUrl = adminApi.getUrl({
            resourceType: resourceType,
            id: id,
            queryParameters: searchFormQuery.getQueryParameters(),
            fhirUrl: fhirUrl
        });
        const relativePath = '/' + resourceType + newUrl.search + newUrl.hash;
        console.info(`Navigating to ${relativePath}`);
        navigate(relativePath);
    };

    const location = useLocation();
    const queryString = location.search;
    const shouldBeJsonFormat =
        (new URLSearchParams(queryString || '').get('_format') || '').toLowerCase() === 'json';
    const getBox = () => {
        if (loading) {
            return <LinearProgress />;
        }
        if (status === 401) {
            return <Box>Login Expired</Box>;
        }
        if (resources?.length === 0) {
            return <Box>No Results Found</Box>;
        }

        return (
            <>
                {resources?.length > 1 &&
                    <Box display='flex' justifyContent='end'>
                        <Button onClick={() => { setExpandAll(true); setCollapseAll(false); }}>Expand All</Button>
                        <Button onClick={() => { setExpandAll(false); setCollapseAll(true); }}>Collapse All</Button>
                    </Box>
                }
                {resources?.map((fullResource: any, index: number) => {
                    const resource = fullResource.resource || fullResource;
                    return (
                        <ResourceCard
                            key={index}
                            index={indexStart + index}
                            resource={resource}
                            expanded={resourceCardExpanded}
                            expandAll={expandAll}
                            collapseAll={collapseAll}
                            setExpandAll={setExpandAll}
                            setCollapseAll={setCollapseAll}
                        />
                    );
                })}
            </>
        );
    };

    useEffect(() => {
        if (id) {
            setResourceCardExpanded(true);
        } else {
            setResourceCardExpanded(false);
        }
        const callApi = async () => {
            try {
                setLoading(true);
                if (fhirUrl) {
                    const fhirApi = new AdminApi({ fhirUrl, setUserDetails });
                    const { json, status: statusCode } = await adminApi.getExportStatus({
                        resourceType,
                        id,
                        queryString,
                        fhirUrl
                    });

                    // set indexStart
                    const queryParams = new URLSearchParams(location.search || '');
                    fhirApi.addMissingRequiredParams({ queryParams, resourceType });
                    const pagesOffSet = parseInt(queryParams.get('_getpagesoffset') || '0');
                    const count = parseInt(queryParams.get('_count') || '0');
                    setIndexStart(pagesOffSet * count);
                    setStatus(statusCode);
                    if (json.entry) {
                        setResources(json.entry);
                        setBundle(json);
                        if (resourceType) {
                            document.title = resourceType;
                        }
                    }
                    else if (json.id && json.resourceType === resourceType) {
                        setResources([json]);
                    }
                    else {
                        setBundle(json);
                        setResources([]);
                    }
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        callApi().catch(console.error);
    }, [id, queryString]);

    if (shouldBeJsonFormat) {
        return <PreJson data={resources} />;
    }

    return (
        <Container maxWidth={false}>
            <div style={{ minHeight: '92vh' }}>
                <Header />
                <Accordion expanded={searchTabExpanded} onChange={handleExpand}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={'searchCollapse'}
                        id={'searchAccordion'}
                    >
                        <Typography variant="h5" sx={{ ml: 1 }}>Search</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SearchContainer resourceType={resourceType} onSearch={handleSearch}></SearchContainer>
                    </AccordionDetails>
                </Accordion>
                <Box my={2}>{getBox()}</Box>
            </div>
            <Footer requestId={bundle?.id} links={bundle?.link} />
        </Container>
    );
};

export default manageExportPage;
