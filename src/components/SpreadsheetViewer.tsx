import React, { useContext, useState, useEffect, useMemo, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import * as XLSX from 'xlsx';
import axios, { AxiosResponse } from 'axios';
import { Typography, Box, CircularProgress, Alert, Tabs, Tab } from '@mui/material';
// AG-Grid styles
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
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
import {themeBalham } from 'ag-grid-community';

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
    const [tabsHeight, setTabsHeight] = useState(48); // Default height

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

    // Effect to measure tabs height
    useEffect(() => {
        if (tabsRef.current) {
            setTabsHeight(tabsRef.current.clientHeight);
        }
    }, [sheets]); // Recalculate when sheets change

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
                    workbook = XLSX.read(arrayBuffer, { type: 'buffer' });
                }

                // Transform workbook to AG-Grid format
                const parsedSheets: SheetData[] = workbook.SheetNames.map((sheetName) => {
                    const worksheet = workbook.Sheets[`${sheetName}`];

                    // Convert worksheet to 2D array
                    const rawData: any[][] = XLSX.utils.sheet_to_json(worksheet, {
                        header: 1,
                        defval: '',
                    });

                    // Extract headers and data
                    const [headers, ...dataRows] = rawData;

                    // Generate column definitions
                    const columnDefs = headers.map((header, index) => ({
                        headerName: String(header),
                        field: `col${index}`,
                        width: 150,
                    }));

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
        <Box sx={{ width: '100%', height: '100%' }}>
            {/* Sheet Tabs */}
            <Tabs
                ref={tabsRef}
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
                        label={`${sheet.name} (${sheet.rowData.length})`}
                        sx={{
                            textTransform: 'none',
                            minWidth: 'auto',
                            padding: '6px 12px',
                        }}
                    />
                ))}
            </Tabs>

            {/* AG-Grid Spreadsheet */}
            <Box
                sx={{
                    height: `calc(100vh - ${tabsHeight + 16}px)`, // 16px for additional margin
                    width: '100%',
                }}
            >
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
