import React, { useContext, useState, useEffect, useMemo, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import * as XLSX from 'xlsx';
import axios, { AxiosResponse } from 'axios';
import {
    Typography,
    Box,
    CircularProgress,
    Alert,
    Tabs,
    Tab,
    FormControlLabel,
    Checkbox,
} from '@mui/material';
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
import type { ColDef, ColGroupDef, ICellRendererParams } from 'ag-grid-community';

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

interface SpreadsheetViewerProps {
    relativeUrl: string;
    format:
        | 'text/csv'
        | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        | 'application/vnd.ms-excel';
}

interface SheetData {
    id: number; // Add id property
    name: string;
    columnDefs: any[];
    rowData: any[];
}

const SpreadsheetViewer: React.FC<SpreadsheetViewerProps> = ({ relativeUrl, format }) => {
    const tabsRef = useRef<HTMLDivElement>(null);
    const gridApiRef = useRef<any>(null); // Ref to store the grid API

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [sheets, setSheets] = useState<SheetData[]>([]);
    const [activeSheet, setActiveSheet] = useState<number>(0);
    const [hideEmptyColumns, setHideEmptyColumns] = useState<boolean>(true);

    const sortedSheets = useMemo(() => {
        return [...sheets].sort((a, b) => a.name.localeCompare(b.name));
    }, [sheets]);

    const { fhirUrl } = useContext(EnvironmentContext);

    const downloadUri: URL = new URL(relativeUrl, fhirUrl);
    downloadUri.searchParams.set('_format', format);
    const queryString = new URLSearchParams(location.search);
    for (const [key, value] of queryString.entries()) {
        if (key !== '_format') {
            downloadUri.searchParams.set(key, value);
        }
    }

    useEffect(() => {
        const fetchSpreadsheetData = async () => {
            try {
                setIsLoading(true);
                setErrorMessage(null);

                const response: AxiosResponse<Blob> = await axios.get(downloadUri.toString(), {
                    responseType: 'blob',
                });

                const arrayBuffer = await response.data.arrayBuffer();

                let workbook: XLSX.WorkBook;
                if (format === 'text/csv') {
                    workbook = XLSX.read(arrayBuffer, { type: 'buffer', codepage: 65001 });
                } else {
                    workbook = XLSX.read(arrayBuffer, { type: 'buffer' });
                }

                const parsedSheets: SheetData[] = workbook.SheetNames.map(
                    (sheetName, sheetIndex) => {
                        const worksheet = workbook.Sheets[`${sheetName}`];
                        const rawData: any[][] = XLSX.utils.sheet_to_json(worksheet, {
                            header: 1,
                            raw: true,
                            rawNumbers: true,
                            UTC: true,
                        });

                        const [headers, ...dataRows] = rawData;

                        const columnDefs: (ColDef<any> | ColGroupDef<any>)[] = headers.map((header, index) => {
                            const hasData = dataRows.some(
                                (row) =>
                                    row[`${index}`] !== undefined &&
                                    row[`${index}`] !== null &&
                                    String(row[`${index}`]).trim() !== ''
                            );

                            return {
                                headerName: String(header),
                                field: `col${index}`,
                                editable: false,
                                filter: true,
                                floatingFilter: true,
                                hide: hideEmptyColumns && !hasData,
                                tooltipField: `col${index}`, // Add tooltip to show full value
                            };
                        });

                        // Add a new column for the FHIR resource link
                        columnDefs.push({
                            headerName: 'FHIR Resource Link',
                            field: 'fhirLink',
                            cellRenderer: (params: ICellRendererParams) => {
                                const resourceUrl = `${relativeUrl}/${params.data.col0}`; // Assuming `col0` contains the resource ID
                                return `<a href="${resourceUrl}" target="_blank">Open Resource</a>`;
                            },
                            editable: false,
                            filter: false,
                        });
                        const rowData = dataRows.map((row) =>
                            row.reduce((acc, cell, index) => {
                                acc[`col${index}`] = cell !== undefined ? String(cell) : '';
                                return acc;
                            }, {})
                        );

                        return {
                            id: sheetIndex,
                            name: sheetName,
                            columnDefs,
                            rowData,
                        };
                    }
                );

                setSheets(parsedSheets);
                setIsLoading(false);
            } catch (error) {
                setErrorMessage(`Failed to load spreadsheet: ${(error as Error).message}`);
                setIsLoading(false);
            }
        };

        fetchSpreadsheetData().then((r) => r);
    }, [relativeUrl, hideEmptyColumns]);

    const defaultColDef = useMemo(
        () => ({
            resizable: true,
            sortable: true,
            filter: true,
        }),
        []
    );

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveSheet(newValue);

        // Clear filters when switching tabs
        if (gridApiRef.current) {
            gridApiRef.current.setFilterModel(null);
        }
    };

    const onGridReady = (params: any) => {
        gridApiRef.current = params.api; // Store the grid API
    };

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

    if (errorMessage) {
        return (
            <Alert severity="error" sx={{ width: '100%' }}>
                {errorMessage}
            </Alert>
        );
    }

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
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
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    {sortedSheets.map((sheet) => (
                        <Tab
                            key={sheet.id}
                            label={`${sheet.name} (${sheet.rowData.length})`}
                            value={sheet.id}
                            sx={{
                                textTransform: 'none',
                                minWidth: 'auto',
                                padding: '6px 12px',
                            }}
                        />
                    ))}
                </Tabs>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={hideEmptyColumns}
                            onChange={(e) => setHideEmptyColumns(e.target.checked)}
                            size="small"
                        />
                    }
                    label={<Typography variant="caption">Hide Empty Columns</Typography>}
                    sx={{ mr: 1 }}
                />
                <FileDownload relativeUrl={relativeUrl} format="application/vnd.ms-excel" />
            </Box>
            <Box
                sx={{
                    flexGrow: 1,
                    width: '100%',
                }}
            >
                <AgGridReact
                    theme={themeBalham}
                    columnDefs={sheets[`${activeSheet}`].columnDefs}
                    rowData={sheets[`${activeSheet}`].rowData}
                    defaultColDef={defaultColDef}
                    onGridReady={onGridReady}
                    gridOptions={{
                        enableCellTextSelection: true,
                        enableBrowserTooltips: true, // Enable browser tooltips
                    }}
                />
            </Box>
        </Box>
    );
};

export default SpreadsheetViewer;
