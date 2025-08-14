import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination,
    Box,
    Typography,
} from '@mui/material';

interface PaginatedTableProps {
    tableElement: HTMLTableElement;
    title?: string;
}

interface TableData {
    headers: string[];
    rows: string[][];
}

const PaginatedTable: React.FC<PaginatedTableProps> = ({ tableElement, title }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // Extract table data from HTML table element
    const extractTableData = (table: HTMLTableElement): TableData => {
        const headers: string[] = [];
        const rows: string[][] = [];

        // Extract headers - check for thead first, then first row
        let headerRow = table.querySelector('thead tr');
        if (!headerRow) {
            // Try to find a row with th elements
            headerRow = table.querySelector('tr:has(th)');
        }
        if (!headerRow) {
            // Fallback to first row if it seems to be a header
            const firstRow = table.querySelector('tr');
            if (firstRow) {
                const cells = firstRow.querySelectorAll('td, th');
                const hasThElements = firstRow.querySelectorAll('th').length > 0;
                if (hasThElements || cells.length <= 5) {
                    // Assume header if few columns or th elements
                    headerRow = firstRow;
                }
            }
        }

        if (headerRow) {
            const headerCells = headerRow.querySelectorAll('th, td');
            headerCells.forEach((cell) => {
                headers.push(cell.textContent?.trim() || '');
            });
        }

        // Extract data rows
        let dataRows: HTMLTableRowElement[] = Array.from(table.querySelectorAll('tbody tr'));
        if (dataRows.length === 0) {
            // No tbody, get all rows
            const allRows = Array.from(table.querySelectorAll('tr'));
            dataRows = allRows.filter((row) => row !== headerRow);
        }

        dataRows.forEach((row) => {
            const cells = row.querySelectorAll('td, th');
            const rowData: string[] = [];
            cells.forEach((cell) => {
                // Handle nested elements in cells
                let cellText = cell.textContent?.trim() || '';
                rowData.push(cellText);
            });
            if (rowData.some((cell) => cell.length > 0)) {
                // Only add rows with some content
                rows.push(rowData);
            }
        });

        return { headers, rows };
    };

    const tableData = extractTableData(tableElement);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    if (tableData.rows.length === 0) {
        return null;
    }

    // Determine if we should show pagination (only for more than 10 rows)
    const shouldPaginate = tableData.rows.length > 10;

    const startIndex = shouldPaginate ? page * rowsPerPage : 0;
    const endIndex = shouldPaginate ? startIndex + rowsPerPage : tableData.rows.length;
    const paginatedRows = tableData.rows.slice(startIndex, endIndex);

    return (
        <Box sx={{ mb: 2 }}>
            {title && (
                <Typography variant="h6" sx={{ mb: 1 }}>
                    {title}
                </Typography>
            )}
            <TableContainer component={Paper}>
                <Table size="small" aria-label="paginated table">
                    {tableData.headers.length > 0 && (
                        <TableHead>
                            <TableRow>
                                {tableData.headers.map((header, index) => (
                                    <TableCell key={index}>{header}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                    )}
                    <TableBody>
                        {paginatedRows.map((row, rowIndex) => (
                            <TableRow key={startIndex + rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {/* Only show pagination for tables with more than 10 rows */}
                {shouldPaginate && (
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 50]}
                        component="div"
                        count={tableData.rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                )}
            </TableContainer>
        </Box>
    );
};

export default PaginatedTable;
