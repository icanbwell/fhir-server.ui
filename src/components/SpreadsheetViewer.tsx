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
    InfiniteRowModelModule,
    ValidationModule,
    PaginationModule,
} from 'ag-grid-community';
import { themeBalham } from 'ag-grid-community';
import FileDownload from './FileDownload';
import type {
    ColDef,
    ColGroupDef,
    ICellRendererParams,
    IDatasource,
    IGetRowsParams,
} from 'ag-grid-community';
import { useNavigate, useLocation } from 'react-router-dom';

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
    InfiniteRowModelModule,
    ValidationModule,
    PaginationModule,
]);

interface SpreadsheetViewerProps {
    relativeUrl: string;
    format:
        | 'text/csv'
        | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        | 'application/vnd.ms-excel';
}

interface SheetData {
    id: number;
    name: string;
    columnDefs: (ColDef<any> | ColGroupDef<any>)[];
    rowData: any[];
}

const SpreadsheetViewer: React.FC<SpreadsheetViewerProps> = ({ relativeUrl, format }) => {
    const tabsRef = useRef<HTMLDivElement>(null);
    const gridApiRef = useRef<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [sheets, setSheets] = useState<SheetData[]>([]);
    const [activeSheetName, setActiveSheetName] = useState<string>();
    const activeSheetNameRef = useRef<string | undefined>();
    const [hideEmptyColumns, setHideEmptyColumns] = useState<boolean>(true);
    const [cachedSheetData, setCachedSheetData] = useState<Record<string, any[]>>({});
    const cachedSheetDataRef = useRef<Record<string, any[]>>({});

    const navigate = useNavigate();
    const location = useLocation();
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
        activeSheetNameRef.current = activeSheetName;
    }, [activeSheetName]);

    useEffect(() => {
        cachedSheetDataRef.current = cachedSheetData;
    }, [cachedSheetData]);

    const sortedSheets = useMemo(() => {
        return [...sheets].sort((a, b) => a.name.localeCompare(b.name));
    }, [sheets]);

    async function getSheetsFromResponse(response: AxiosResponse<Blob>): Promise<SheetData[]> {
        const arrayBuffer = await response.data.arrayBuffer();
        let workbook: XLSX.WorkBook;

        if (format === 'text/csv') {
            workbook = XLSX.read(arrayBuffer, { type: 'buffer', codepage: 65001 });
        } else {
            workbook = XLSX.read(arrayBuffer, { type: 'buffer' });
        }

        // noinspection UnnecessaryLocalVariableJS
        const parsedSheets: SheetData[] = workbook.SheetNames.map((sheetName, sheetIndex) => {
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
                    tooltipField: `col${index}`,
                    sort: header === 'lastUpdated' ? 'desc' : undefined,
                };
            });

            // noinspection JSUnusedGlobalSymbols
            columnDefs.push({
                headerName: 'FHIR Link',
                field: 'fhirLink',
                cellRenderer: (params: ICellRendererParams) => {
                    const resourceUrl = `/4_0_0/${sheetName}/${params.data.col0}`;
                    return (
                        <a href={resourceUrl} target="_blank" rel="noopener noreferrer">
                            {sheetName}/{params.data.col0}
                        </a>
                    );
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
        });

        return parsedSheets;
    }

    const fetchAndLoadSpreadsheetDataAsync = async (fhirUri: URL) => {
        try {
            setIsLoading(true);
            setErrorMessage(null);
            const response: AxiosResponse<Blob> = await axios.get(fhirUri.toString(), {
                responseType: 'blob',
            });

            const parsedSheets: SheetData[] = await getSheetsFromResponse(response);
            setSheets(parsedSheets);
            setIsLoading(false);
        } catch (error) {
            setErrorMessage(`Failed to load spreadsheet: ${(error as Error).message}`);
            setIsLoading(false);
        }
    };

    const dataSource: IDatasource = {
        getRows: async (params: IGetRowsParams) => {
            try {
                const activeSheet = activeSheetNameRef.current;
                if (!activeSheet) {
                    params.failCallback();
                    return;
                }

                // Use the ref to get the most current cached data
                const cachedSheetData1 = { ...cachedSheetDataRef.current };
                const cachedRows = cachedSheetData1[`${activeSheet}`] || [];

                const startRow = params.startRow;
                const endRow = params.endRow;
                const pageSize = endRow - startRow;

                if (cachedRows.length < endRow) {
                    const pagedUri = new URL(downloadUri.toString());
                    pagedUri.searchParams.set('_getpagesoffset', startRow.toString());
                    pagedUri.searchParams.set('_count', pageSize.toString());

                    const response: AxiosResponse<Blob> = await axios.get(pagedUri.toString(), {
                        responseType: 'blob',
                    });

                    const parsedSheets: SheetData[] = await getSheetsFromResponse(response);
                    const newSheetData =
                        parsedSheets.find((s) => s.name === activeSheet)?.rowData || [];

                    // Use functional update to ensure we're working with the most recent state
                    setCachedSheetData((prevCachedData) => {
                        const existingRows = prevCachedData[`${activeSheet}`] || [];
                        const updatedRows = [...existingRows, ...newSheetData];

                        return {
                            ...prevCachedData,
                            [activeSheet]: updatedRows,
                        };
                    });

                    // Use the most recently cached data
                    const updatedCachedData = { ...cachedSheetDataRef.current };
                    const rows =
                        updatedCachedData[`${activeSheet}`]?.slice(startRow, endRow) || newSheetData;

                    params.successCallback(rows, cachedRows.length + newSheetData.length);
                } else {
                    const rows = cachedRows.slice(startRow, endRow);
                    params.successCallback(rows, cachedRows.length);
                }
            } catch (error) {
                console.error('Failed to fetch rows:', error);
                params.failCallback();
            }
        },
    };

    useEffect(() => {
        setCachedSheetData({});
        fetchAndLoadSpreadsheetDataAsync(downloadUri).then((r) => r);
    }, [relativeUrl, hideEmptyColumns]);

    useEffect(() => {
        const pathTabName = location.pathname.includes('$summary')
            ? location.pathname.split('$summary/')[1]?.split('/')[0]
            : undefined;

        if (pathTabName !== undefined) {
            setActiveSheetName(pathTabName);
        } else if (sortedSheets.length > 0) {
            setActiveSheetName(sortedSheets[0].name);
        }
    }, [location.pathname, sortedSheets]);

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        if (newValue === undefined) {
            return;
        }
        setActiveSheetName(newValue);

        let currentPath = location.pathname;
        if (currentPath.endsWith('$summary')) {
            currentPath = `${currentPath}/${newValue}`;
        } else {
            currentPath = currentPath.split('/').slice(0, -1).join('/') + `/${newValue}`;
        }

        navigate(currentPath, { replace: true });

        if (gridApiRef.current) {
            gridApiRef.current.setFilterModel(null);
        }
    };

    const defaultColDef = useMemo(
        () => ({
            resizable: true,
            sortable: true,
            filter: true,
        }),
        []
    );

    const onGridReady = (params: any) => {
        gridApiRef.current = params.api;
    };

    // Optional: Add a method to force grid refresh
    const refreshGrid = () => {
        // Reset grid when tab changes
        if (gridApiRef.current) {
            gridApiRef.current.purgeInfiniteCache();
            gridApiRef.current.refreshInfiniteCache();
            gridApiRef.current.setFilterModel(null);
        }
    };

    // Call this when active sheet changes
    useEffect(() => {
        refreshGrid();
    }, [activeSheetName]);

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
                    value={activeSheetName || sortedSheets[0]?.name}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    {sortedSheets.map((sheet: SheetData) => (
                        <Tab
                            key={sheet.name}
                            label={`${sheet.name} (${sheet.rowData.length})`}
                            value={sheet.name}
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
                    columnDefs={
                        sortedSheets.find((s) => s.name === activeSheetName)?.columnDefs || []
                    }
                    defaultColDef={defaultColDef}
                    rowModelType={'infinite'}
                    cacheBlockSize={100}
                    cacheOverflowSize={2}
                    maxConcurrentDatasourceRequests={1}
                    pagination={true}
                    paginationPageSize={1}
                    paginationPageSizeSelector={[1]}
                    onGridReady={onGridReady}
                    gridOptions={{
                        enableCellTextSelection: true,
                        enableBrowserTooltips: true,
                        datasource: dataSource,
                    }}
                />
            </Box>
        </Box>
    );
};

export default SpreadsheetViewer;
