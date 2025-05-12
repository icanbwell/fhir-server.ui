import React, { useContext, useState, useEffect } from 'react';
import Spreadsheet from 'react-spreadsheet';
import * as XLSX from 'xlsx';
import axios, { AxiosResponse } from 'axios';
import { Typography, Box, CircularProgress, Alert, Tabs, Tab } from '@mui/material';
import EnvironmentContext from '../context/EnvironmentContext';

// Type definitions
interface SpreadsheetViewerProps {
    relativeUrl: string;
    format:
        | 'text/csv'
        | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        | 'application/vnd.ms-excel';
}

interface SheetData {
    name: string;
    data: Array<Array<{ value: string }>>;
}

const SpreadsheetViewer: React.FC<SpreadsheetViewerProps> = ({ relativeUrl, format }) => {
    // State management
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [sheets, setSheets] = useState<SheetData[]>([]);
    const [activeSheet, setActiveSheet] = useState<number>(0);

    // Context
    const { fhirUrl } = useContext(EnvironmentContext);

    // Construct download URL
    const downloadUri: URL = new URL(relativeUrl, fhirUrl);
    downloadUri.searchParams.set('_format', format);

    // Fetch and parse spreadsheet
    useEffect(() => {
        const fetchSpreadsheetData = async () => {
            try {
                setIsLoading(true);
                setErrorMessage(null);

                // Fetch file
                const response: AxiosResponse<Blob> = await axios.get(downloadUri.toString(), {
                    responseType: 'blob',
                });

                // Convert blob to array buffer
                const arrayBuffer = await response.data.arrayBuffer();

                // Parse file based on format
                let workbook: XLSX.WorkBook;
                if (format === 'text/csv') {
                    workbook = XLSX.read(arrayBuffer, { type: 'buffer', codepage: 65001 });
                } else {
                    // Works for both 'application/vnd.ms-excel' and 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                    workbook = XLSX.read(arrayBuffer, { type: 'buffer' });
                }

                // Transform workbook to our sheet format
                const parsedSheets: SheetData[] = workbook.SheetNames.map((sheetName) => {
                    const worksheet = workbook.Sheets[`${sheetName}`];

                    // Convert worksheet to 2D array
                    // @ts-ignore
                    const sheetData: Array<Array<{ value: string }>> = XLSX.utils
                        .sheet_to_json(worksheet, {
                            header: 1,
                            defval: '',
                        })
                        .map((row: any) =>
                            row.map((cell: any) => ({
                                value: cell !== undefined ? String(cell) : '',
                            }))
                        );

                    return {
                        name: sheetName,
                        data: sheetData,
                    };
                });

                // Log parsed sheet names
                console.log(
                    'Parsed Sheet Names:',
                    parsedSheets.map((sheet) => sheet.name)
                );

                setSheets(parsedSheets);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching spreadsheet:', error);
                setErrorMessage(`Failed to load spreadsheet: ${(error as Error).message}`);
                setIsLoading(false);
            }
        };

        fetchSpreadsheetData().then((r) => r);
    }, [relativeUrl]);

    // Loading state
    if (isLoading) {
        return (
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="100%"
            >
                <CircularProgress />
                <Typography variant="body2" sx={{ mt: 2 }}>
                    Loading spreadsheet...
                </Typography>
            </Box>
        );
    }

    // Error state
    if (errorMessage) {
        return (
            <Alert severity="error" sx={{ width: '100%' }}>
                {errorMessage}
            </Alert>
        );
    }

    // Main render
    return (
        <Box sx={{ width: '100%' }}>
            {/* Sheet Tabs */}
            {/* Sheet Tabs */}
            <Tabs
                value={activeSheet}
                onChange={(e, newValue) => setActiveSheet(newValue)}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    mb: 2,
                }}
            >
                {sheets.map((sheet, index) => (
                    <Tab
                        key={index}
                        label={`${sheet.name} (${sheet.data.length - 1})`}
                        sx={{
                            textTransform: 'none',
                            minWidth: 'auto',
                            padding: '6px 12px',
                        }}
                    />
                ))}
            </Tabs>

            {/* Spreadsheet */}
            <Spreadsheet
                data={sheets[`${activeSheet}`].data}
                onChange={(newData) => {
                    const updatedSheets = [...sheets];
                    // @ts-ignore
                    updatedSheets[`${activeSheet}`].data = newData;
                    setSheets(updatedSheets);
                }}
            />
        </Box>
    );
};

export default SpreadsheetViewer;
