import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Box, TextField, Button, Paper } from '@mui/material';
import SpreadsheetViewer from '../components/SpreadsheetViewer';

const ExcelViewerPage: React.FC = () => {
    const location = useLocation();
    const [relativeUrl, setRelativeUrl] = useState<string>('');
    const [viewSpreadsheet, setViewSpreadsheet] = useState<boolean>(false);

    // Extract passed URL from location state
    useEffect(() => {
        const state = location.state as { relativeUrl?: string };
        if (state?.relativeUrl) {
            setRelativeUrl(state.relativeUrl);
            setViewSpreadsheet(true);
        }
    }, [location]);

    const handleLoadSpreadsheet = () => {
        if (relativeUrl.trim()) {
            setViewSpreadsheet(true);
        }
    };

    return (
        <Container maxWidth="xl">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Excel Viewer
                </Typography>

                <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                        <TextField
                            fullWidth
                            label="Relative URL"
                            variant="outlined"
                            value={relativeUrl}
                            onChange={(e) => setRelativeUrl(e.target.value)}
                            placeholder="Enter relative URL (e.g., /path/to/file)"
                        />
                        <Button
                            variant="contained"
                            onClick={handleLoadSpreadsheet}
                            disabled={!relativeUrl.trim()}
                        >
                            Load Spreadsheet
                        </Button>
                    </Box>
                </Paper>

                {viewSpreadsheet && (
                    <SpreadsheetViewer
                        relativeUrl={relativeUrl}
                        format="application/vnd.ms-excel"
                    />
                )}
            </Box>
        </Container>
    );
};

export default ExcelViewerPage;
