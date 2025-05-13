import React from 'react';
import {
    Box,
    Link,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    Tooltip,
} from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { TBaseResourceProps } from '../types/baseTypes';
import { TMeta } from '../types/partials/Meta';

type TMetaProps = TBaseResourceProps & {
    meta: TMeta | undefined;
};

function Meta({ meta, resourceType, id }: TMetaProps) {
    if (!meta) {
        return null;
    }

    const formatDate = (date: Date) => new Date(date).toISOString();

    const renderDateLinks = () => {
        if (!meta.lastUpdated) {return (<></>);}

        const formattedDate = formatDate(new Date(`${meta.lastUpdated}`));
        const datePrefix = formattedDate.substring(0, 10);

        return (
            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                <Tooltip title={`Get ${resourceType} resources on this date`}>
                    <Chip
                        icon={<CalendarTodayIcon fontSize="small" />}
                        label="On This Date"
                        size="small"
                        component="a"
                        href={`/4_0_0/${resourceType}?_lastUpdated=eq.${datePrefix}`}
                        clickable
                    />
                </Tooltip>
                <Tooltip title={`Get ${resourceType} resources before this date`}>
                    <Chip
                        icon={<FilterAltIcon fontSize="small" />}
                        label="Before This"
                        size="small"
                        component="a"
                        href={`/4_0_0/${resourceType}?_lastUpdated=lt${formattedDate.split('.')[0] + 'Z'}`}
                        clickable
                    />
                </Tooltip>
                <Tooltip title={`Get ${resourceType} resources after this date`}>
                    <Chip
                        icon={<FilterAltIcon fontSize="small" />}
                        label="After This"
                        size="small"
                        component="a"
                        href={`/4_0_0/${resourceType}?_lastUpdated=gt${formattedDate.split('.')[0] + 'Z'}`}
                        clickable
                    />
                </Tooltip>
            </Box>
        );
    };

    return (
        <Box sx={{ width: '100%', mb: 2 }}>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                Meta Information
            </Typography>

            <Paper elevation={0} variant="outlined" sx={{ p: 2, mb: 2 }}>
                {meta.lastUpdated && (
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                            <b>Last Updated:</b> {`${meta.lastUpdated}`}
                        </Typography>
                        {renderDateLinks()}
                    </Box>
                )}

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                        <b>Version:</b> {meta.versionId}
                    </Typography>
                    <Tooltip title="Show history for this resource">
                        <Chip
                            icon={<HistoryIcon fontSize="small" />}
                            label="History"
                            size="small"
                            component="a"
                            href={`/4_0_0/${resourceType}/${id}/_history`}
                            clickable
                        />
                    </Tooltip>
                </Box>

                {meta.source && (
                    <Typography variant="body2" color="text.secondary">
                        <b>Source:</b>{' '}
                        <Link
                            href={`/4_0_0/${resourceType}?source=${encodeURIComponent(meta.source?.toString() ?? '')}`}
                            color="primary"
                        >
                            {meta.source}
                        </Link>
                    </Typography>
                )}
            </Paper>

            {meta.security && meta.security.length > 0 && (
                <>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                        Security
                    </Typography>
                    <TableContainer component={Paper} variant="outlined">
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Code</TableCell>
                                    <TableCell>System</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {meta.security.map((security) => (
                                    <TableRow key={`${security.id}`}>
                                        <TableCell>{security.id}</TableCell>
                                        <TableCell>
                                            <Link
                                                href={`/4_0_0/${resourceType}?_security=${encodeURIComponent(security.system?.toString() ?? '')}|${encodeURIComponent(security.code?.toString() ?? '')}`}
                                                color="primary"
                                            >
                                                {security.code}
                                            </Link>
                                        </TableCell>
                                        <TableCell>{security.system}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            )}
        </Box>
    );
}

export default Meta;
