import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Link } from '@mui/material';
import { TResource } from '../types/resources/Resource';
import DataObjectIcon from '@mui/icons-material/DataObject';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Json = ({ resource, error }: { resource: TResource; error?: boolean }) => {
    const queryParams = new URLSearchParams(error ? window.location.search : '');
    queryParams.set('_format', 'json');
    if (resource.resourceType === 'AuditEvent' && resource.meta?.lastUpdated) {
        queryParams.append('date', `le${resource.meta.lastUpdated}`);
        queryParams.append('date', `ge${resource.meta.lastUpdated}`);
    }

    const pathName = error
        ? window.location.pathname
        : `/4_0_0/${resource.resourceType}/${resource.id}`;
    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mt: 2,
                }}
            >
                <Link
                    href={`${pathName}?${queryParams.toString()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                >
                    <DataObjectIcon color="primary" fontSize="small" />
                    <Typography variant="body1" color="primary">
                        Raw Json
                    </Typography>
                    <OpenInNewIcon color="primary" />
                </Link>
            </Box>
        </React.Fragment>
    );
};

export default Json;
