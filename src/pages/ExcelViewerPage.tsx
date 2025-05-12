import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import SpreadsheetViewer from '../components/SpreadsheetViewer';

const ExcelViewerPage: React.FC = () => {
    const { resourceType, id, operation } = useParams<{
        resourceType: string;
        id?: string;
        operation?: string;
    }>();

    const [relativeUrl, setRelativeUrl] = useState<string>('');
    const [viewSpreadsheet, setViewSpreadsheet] = useState<boolean>(false);

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
            setViewSpreadsheet(true);
        }
    }, [resourceType, id, operation]);

    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                p: 2,
                boxSizing: 'border-box',
            }}
        >
            <Typography variant="h4" gutterBottom>
                Excel Viewer: {resourceType} {id ? `- ${id}` : ''}{' '}
                {operation ? `(${operation})` : ''}
            </Typography>

            {viewSpreadsheet && (
                <Box
                    sx={{
                        flex: 1,
                        overflow: 'hidden',
                        width: '100%',
                    }}
                >
                    <SpreadsheetViewer
                        relativeUrl={relativeUrl}
                        format="application/vnd.ms-excel"
                    />
                </Box>
            )}
        </Box>
    );
};

export default ExcelViewerPage;
