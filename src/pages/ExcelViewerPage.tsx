import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SpreadsheetViewer from '../components/SpreadsheetViewer';
import { Box } from '@mui/material';

const ExcelViewerPage: React.FC = () => {
    const { resourceType, id, operation } = useParams<{
        resourceType: string;
        id?: string;
        operation?: string;
    }>();

    const [relativeUrl, setRelativeUrl] = useState<string>('');

    // Construct relative URL based on route parameters
    useEffect(() => {
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
    }, [resourceType, id, operation]);

    return (
        <Box
            sx={{
                width: '100%', // Full width
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'auto', // Allow scrolling if needed
                padding: 0,
                boxSizing: 'border-box',
                margin: '2pt',
            }}
        >

            <Box
                sx={{
                    flex: 1,
                    width: '100%',
                    overflowX: 'auto', // Horizontal scrolling
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
        </Box>
    );
};

export default ExcelViewerPage;
