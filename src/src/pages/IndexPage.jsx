import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  Accordion,
  Alert,
  AlertTitle,
  Box,
  Container,
  LinearProgress,
} from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import ResourceCard from '../components/ResourceCard';
import FhirApi from '../utils/fhirApi';
import SearchContainer from '../components/SearchContainer';

/**
 * IndexPage/home/ubuntu/Documents/code/EFS/fhir-server/src/web/src/pages/SearchPage.jsx
 * Note: Any route parameters are available via useParams()
 * @returns {Element}
 * @constructor
 */
const IndexPage = ({ search, fhirUrl }) => {
  const [resources, setResources] = useState(undefined);
  const [bundle, setBundle] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const { id, resourceType = '', operation } = useParams();

  const [searchTabExpanded, setSearchTabExpanded] = useState(false);
  const [resourceCardExpanded, setResourceCardExpanded] = useState(false);

  const navigate = useNavigate();

  const handleExpand = () => {
    setSearchTabExpanded(!searchTabExpanded);
  };

  const location = useLocation();
  const queryString = location.search;

  function getBox() {
    if (loading) {
      return <LinearProgress />;
    }
    if (parseInt(status) === 401) {
      return <Box>Login Expired</Box>;
    }
    if (parseInt(status) !== 200 && parseInt(status) !== 404) {
      return <Box>{status}</Box>;
    }
    if (resources && resources.length === 0) {
      return <Box>No Results Found</Box>;
    }
    // If narrative is returned then show it at top level
    return (
      <>
        {/* if we have a single resource*/}
        {resources && resources.length === 1 && resources[0].text?.div && (
          <Alert severity="success">
            <AlertTitle>Answer</AlertTitle>
            <Box dangerouslySetInnerHTML={{ __html: resources[0].text?.div }} />
          </Alert>
        )}
        {/*if we have a list of resources*/}
        {resources &&
          resources.length === 1 &&
          resources[0].resource?.text?.div && (
            <Alert severity="success">
              <AlertTitle>Answer</AlertTitle>
              <Box
                dangerouslySetInnerHTML={{
                  __html: resources[0].resource?.text?.div,
                }}
              />
            </Alert>
          )}
        {resources.map((fullResource, index) => {
          const resource = fullResource.resource || fullResource;
          return (
            <ResourceCard
              key={index}
              index={index}
              resource={resource}
              expanded={resourceCardExpanded}
            />
          );
        })}
      </>
    );
  }

  console.log(
    `id: ${id}, resourceType: ${resourceType}, queryString: ${queryString},` +
      ` search: ${search}, operation: ${operation}`,
  );

  useEffect(() => {
    if (id) {
      setResourceCardExpanded(true);
    }
    const callApi = async () => {
      document.title = 'Helix FHIR Server';
      if (search) {
        setSearchTabExpanded(true);
        return;
      }
      try {
        setLoading(true);

        const fhirApi = new FhirApi();
        const { json, status: statusCode } = await fhirApi.getBundleAsync({
          baseUrl: fhirUrl,
          resourceType,
          id,
          queryString,
          operation,
        });
        if (statusCode === 401) {
          window.location.reload();
        }
        // noinspection JSCheckFunctionSignatures
        setStatus(String(statusCode));
        if (json.entry) {
          setResources(json.entry);
          setBundle(json);
          if (resourceType) {
            document.title = resourceType;
          }
        } else {
          // noinspection JSCheckFunctionSignatures
          setResources(json ? [json] : []);
          if (json.id) {
            document.title = `${json.id} (${resourceType})`;
          } else {
            document.title = 'Helix FHIR Server';
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    callApi().catch(console.error);
  }, [id, queryString, resourceType, search, operation]);

  /**
   * Handle search event from child component
   * @param {SearchFormQuery} searchFormQuery
   */
  const handleSearch = (searchFormQuery) => {
    const fhirApi = new FhirApi();

    /**
     * @type {URL}
     */
    const newUrl = fhirApi.getUrl({
      resourceType: resourceType,
      id: id,
      queryParameters: searchFormQuery.getQueryParameters(),
    });
    const relativePath = newUrl.pathname + newUrl.search + newUrl.hash;
    console.info(`Navigating to ${relativePath}`);
    navigate(relativePath);
    // setSearchClicked(true);
    // setSearchTabExpanded(false);
  };

  return (
    <Container maxWidth={false}>
      <Header />
      <Accordion expanded={searchTabExpanded} onChange={handleExpand}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={'searchCollapse'}
          id={'searchAccordion'}
        >
          <Typography variant="h5">Search</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SearchContainer onSearch={handleSearch} id={id}></SearchContainer>
        </AccordionDetails>
      </Accordion>
      <Box my={2}>{getBox()}</Box>
      {bundle && <Footer url={bundle.url} meta={bundle.meta} />}
    </Container>
  );
};

export default IndexPage;