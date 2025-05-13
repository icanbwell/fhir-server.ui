import React, { useContext, useState, useEffect, useMemo, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import * as XLSX from 'xlsx';
import axios, { AxiosResponse } from 'axios';
import { Typography, Box, CircularProgress, Alert, Tabs, Tab } from '@mui/material';
import EnvironmentContext from '../context/EnvironmentContext';
import {
    ModuleRegistry,
    ColumnAutoSizeModule,
    ColumnHoverModule,
    RowAutoHeightModule,
    RowStyleModule,
    TooltipModule,
    TextFilterModule,
    NumberFilterModule,
    DateFilterModule,
    QuickFilterModule,
    ClientSideRowModelModule,
} from 'ag-grid-community';
import { themeBalham } from 'ag-grid-community';
import FileDownload from './FileDownload';

ModuleRegistry.registerModules([
    ColumnAutoSizeModule,
    ColumnHoverModule,
    RowAutoHeightModule,
    RowStyleModule,
    TooltipModule,
    TextFilterModule,
    NumberFilterModule,
    DateFilterModule,
    QuickFilterModule,
    ClientSideRowModelModule,
]);

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
    columnDefs: any[];
    rowData: any[];
}

const SpreadsheetViewer: React.FC<SpreadsheetViewerProps> = ({ relativeUrl, format }) => {
    // Ref for tabs to measure height
    const tabsRef = useRef<HTMLDivElement>(null);

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
    const queryString = new URLSearchParams(location.search);
    for (const [key, value] of queryString.entries()) {
        if (key !== '_format') {
            downloadUri.searchParams.set(key, value);
        }
    }

    // Fetch and parse spreadsheet
    useEffect(() => {
        const fetchSpreadsheetData = async () => {
            try {
                setIsLoading(true);
                setErrorMessage(null);

                console.info(`Fetching spreadsheet from: ${downloadUri.toString()}`);

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
                    workbook = XLSX.read(arrayBuffer, { type: 'buffer' });
                }

                // Transform workbook to AG-Grid format
                const parsedSheets: SheetData[] = workbook.SheetNames.map((sheetName) => {
                    const worksheet = workbook.Sheets[`${sheetName}`];
                    // Convert worksheet to 2D array
                    const rawData: any[][] = XLSX.utils.sheet_to_json(worksheet, {
                        header: 1,
                        raw: true,
                        rawNumbers: true,
                        UTC: true,
                    });

                    // Extract headers and data
                    const [headers, ...dataRows] = rawData;

                    // Generate column definitions with data check
                    const columnDefs = headers.map((header, index) => {
                        // Check if any row in this column has non-empty data
                        const hasData = dataRows.some(
                            (row) =>
                                row[index] !== undefined &&
                                row[index] !== null &&
                                String(row[index]).trim() !== ''
                        );

                        return {
                            headerName: String(header),
                            field: `col${index}`,
                            editable: false,
                            filter: true,
                            floatingFilter: true,
                            hide: !hasData, // Hide column if no data
                        };
                    });

                    // Transform data rows
                    const rowData = dataRows.map((row) =>
                        row.reduce((acc, cell, index) => {
                            acc[`col${index}`] = cell !== undefined ? String(cell) : '';
                            return acc;
                        }, {})
                    );

                    return {
                        name: sheetName,
                        columnDefs,
                        rowData,
                    };
                });

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

    // AG-Grid default options
    const defaultColDef = useMemo(
        () => ({
            resizable: true,
            sortable: true,
            filter: true,
        }),
        []
    );

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
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Sheet Tabs */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: 1,
                    borderColor: 'divider',
                    mb: 2,
                    height: '30px',
                }}
            >
                <Tabs
                    ref={tabsRef}
                    value={activeSheet}
                    onChange={(e, newValue) => setActiveSheet(newValue)}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    {sheets.map((sheet, index) => (
                        <Tab
                            key={index}
                            label={`${sheet.name} (${sheet.rowData.length})`}
                            sx={{
                                textTransform: 'none',
                                minWidth: 'auto',
                                padding: '6px 12px',
                            }}
                        />
                    ))}
                </Tabs>

                <FileDownload relativeUrl={relativeUrl} format="application/vnd.ms-excel" />
            </Box>
            <Box
                sx={{
                    flexGrow: 1, // This makes the grid take up remaining space
                    width: '100%',
                }}
            >
                {/* AG-Grid Spreadsheet */}
                <AgGridReact
                    theme={themeBalham}
                    columnDefs={sheets[`${activeSheet}`].columnDefs}
                    rowData={sheets[`${activeSheet}`].rowData}
                    defaultColDef={defaultColDef}
                />
            </Box>
        </Box>
    );
};

export default SpreadsheetViewer;
