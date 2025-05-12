import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import SpreadsheetViewer from '../components/SpreadsheetViewer';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ExcelViewerPage: React.FC = () => {
    const { resourceType, id, operation } = useParams<{
        resourceType: string;
        id?: string;
        operation?: string;
    }>();

    const [relativeUrl, setRelativeUrl] = useState<string>('');

    // Set page title when component mounts or params change
    useEffect(() => {
        // Construct title
        // Update document title
        document.title = id ? `${resourceType}/${id} Sheet` : (resourceType ?? 'Excel');

        // Construct relative URL
        if (resourceType) {
            let url = `/4_0_0/${resourceType}`;

            if (id) {
                url += `/${id}`;
            }

            if (operation) {
                url += `/${operation}`;
            }

            setRelativeUrl(url);
        }

        // Optional: Reset title when component unmounts
        return () => {
            document.title = 'FHIR Viewer';
        };
    }, [resourceType, id, operation]);

    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'auto',
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
            }}
        >
            <Header />
            <Box
                sx={{
                    flex: 1,
                    width: '100%',
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    position: 'relative',
                }}
            >
                {relativeUrl && (
                    <SpreadsheetViewer
                        relativeUrl={relativeUrl}
                        format="application/vnd.ms-excel"
                    />
                )}
            </Box>
            <Footer/>
        </Box>
    );
};

export default ExcelViewerPage;
