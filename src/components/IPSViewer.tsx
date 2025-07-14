// filepath: /Users/imranqureshi/git/fhir-server.ui/src/components/IPSViewer.tsx
import React, { useContext, useState, useEffect } from 'react';
import {
    Typography,
    Box,
    CircularProgress,
    Alert,
    Card,
    CardContent,
    Link,
    List,
    ListItem,
    Paper,
    Divider,
    Tooltip
} from '@mui/material';
import axios from 'axios';
import EnvironmentContext from '../context/EnvironmentContext';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import CodeIcon from '@mui/icons-material/Code';
import './IPSNarrative.css'; // Import the CSS file for styling the IPS narrative

interface IPSViewerProps {
    relativeUrl: string;
}

interface Resource {
    resourceType: string;
    id: string;
    [key: string]: any;
}

interface Bundle {
    resourceType: 'Bundle';
    type: string;
    entry: Array<{
        resource: Resource;
        [key: string]: any;
    }>;
    [key: string]: any;
}

const IPSViewer: React.FC<IPSViewerProps> = ({ relativeUrl }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [bundle, setBundle] = useState<Bundle | null>(null);
    const [compositionHtml, setCompositionHtml] = useState<string>('');
    const location = useLocation();
    const { isDarkMode } = useTheme();

    const { fhirUrl } = useContext(EnvironmentContext);

    const downloadUri = React.useMemo(() => {
        const uri = new URL(relativeUrl, fhirUrl);
        const queryString = new URLSearchParams(location.search);
        for (const [key, value] of queryString.entries()) {
            uri.searchParams.set(key, value);
        }
        return uri.toString();
    }, [relativeUrl, fhirUrl, location.search]);

    useEffect(() => {
        const fetchBundle = async () => {
            setIsLoading(true);
            setErrorMessage(null);

            try {
                const response = await axios.get<Bundle>(downloadUri);
                setBundle(response.data);

                // Extract the HTML content from the first Composition resource
                const compositionEntry = response.data.entry?.find(
                    entry => entry.resource?.resourceType === 'Composition'
                );

                if (compositionEntry) {
                    const composition = compositionEntry.resource;
                    if (composition.text?.div) {
                        // Extract the div content from the composition
                        setCompositionHtml(composition.text.div);
                    } else {
                        setErrorMessage('No HTML content found in the Composition resource');
                    }
                } else {
                    setErrorMessage('No Composition resource found in the bundle');
                }
            } catch (error) {
                console.error('Error fetching IPS bundle:', error);
                setErrorMessage('Failed to load the International Patient Summary');
            } finally {
                setIsLoading(false);
            }
        };

        fetchBundle();
    }, [downloadUri]);

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (errorMessage) {
        return <Alert severity="error">{errorMessage}</Alert>;
    }

    // Group resources by type for better organization
    const resourcesByType: { [key: string]: Resource[] } = {};
    bundle?.entry?.forEach(entry => {
        if (entry.resource) {
            const { resourceType } = entry.resource;
            if (!resourcesByType[`${resourceType}`]) {
                resourcesByType[`${resourceType}`] = [];
            }
            resourcesByType[`${resourceType}`].push(entry.resource);
        }
    });

    return (
        <Box sx={{ width: '100%', mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h5">
                    International Patient Summary
                </Typography>
                <Tooltip title="View the raw JSON of this bundle" arrow>
                    <Link
                        href={`${downloadUri}${downloadUri.includes('?') ? '&' : '?'}_format=json`}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                    >
                        <CodeIcon sx={{ mr: 0.5 }} />
                        View Raw Bundle
                    </Link>
                </Tooltip>
            </Box>

            {/* Render the HTML content from the Composition */}
            {compositionHtml && (
                <Paper
                    sx={{
                        p: 3,
                        mb: 4,
                        backgroundColor: isDarkMode ? '#282c34' : '#f5f5f5',
                        color: isDarkMode ? '#ffffff' : 'inherit'
                    }}
                    className={isDarkMode ? 'dark-mode' : ''}
                >
                    <Box
                        dangerouslySetInnerHTML={{ __html: compositionHtml }}
                        className="ips-narrative-container"
                        sx={{
                            '& a': {
                                color: isDarkMode ? '#90caf9' : '#1976d2'
                            },
                            '--table-header-bg': isDarkMode ? '#3a3a3a' : '#f0f0f0',
                            '--table-header-color': isDarkMode ? '#f0f0f0' : '#333',
                            '--table-border-color': isDarkMode ? '#555' : '#ddd',
                            '--table-stripe-color': isDarkMode ? '#2c2c2c' : '#f9f9f9',
                            '--text-color': isDarkMode ? '#e0e0e0' : 'inherit',
                            '--heading-color': isDarkMode ? '#e0e0e0' : '#333',
                            '--link-color': isDarkMode ? '#90caf9' : '#0066cc',
                            '--section-border-color': isDarkMode ? '#444' : '#eaeaea',
                            '--highlight-bg': isDarkMode ? '#665500' : '#fff3cd',
                            '--code-bg': isDarkMode ? '#1f2937' : '#f6f8fa',
                        }}
                    />
                </Paper>
            )}

            {/* List all resources in the bundle */}
            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                Bundle Resources
            </Typography>

            {Object.keys(resourcesByType).map((resourceType) => (
                <Card key={resourceType} sx={{ mb: 2 }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            {resourceType} ({resourcesByType[`${resourceType}`].length})
                        </Typography>
                        <Divider sx={{ mb: 2 }} />
                        <List dense>
                            {resourcesByType[`${resourceType}`].map((resource) => (
                                <ListItem key={resource.id}>
                                    <Link
                                        href={`/4_0_0/${resourceType}/${resource.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {resource.id}
                                        {resource.resourceType === 'Patient' && resource.name &&
                                            ` - ${resource.name.map((n: any) =>
                                                n.family ? `${n.given?.join(' ') || ''} ${n.family}` : '').join(', ')}`
                                        }
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default IPSViewer;
