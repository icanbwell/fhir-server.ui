import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, CardHeader, Collapse } from '@mui/material';
import ResourceItem from './ResourceItem';
import Json from './Json';
import { TResource } from '../types/resources/Resource';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

type TResourceCardProps = {
    index: number;
    resource: TResource;
    expanded: boolean;
    expandAll: boolean;
    collapseAll: boolean;
    setExpandAll: React.Dispatch<React.SetStateAction<boolean>>;
    setCollapseAll: React.Dispatch<React.SetStateAction<boolean>>;
    error?: boolean;
};

const ResourceCard = ({
    index,
    resource,
    expanded,
    error,
    expandAll,
    collapseAll,
    setExpandAll,
    setCollapseAll,
}: TResourceCardProps) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
        setExpandAll(false);
        setCollapseAll(false);
    };

    useEffect(() => {
        if (expandAll) {
            setOpen(true);
        }
        if (collapseAll) {
            setOpen(false);
        }
    }, [expandAll, collapseAll]);

    useEffect(() => {
        setOpen(expanded);
    }, [expanded]);

    // List of resource types that should show FileDownload
    const downloadableResourceTypes = ['Patient', 'Person', 'Practitioner'];

    return (
        <Card key={index}>
            <CardHeader
                onClick={handleOpen}
                style={{ cursor: 'pointer' }}
                title={`(${index + 1}) ${resource.resourceType}/${resource.id ?? ''}`}
                action={<Button>{open ? 'Close' : 'Open'}</Button>}
            ></CardHeader>
            <Collapse in={open}>
                <CardContent>
                    <ResourceItem resourceType={resource.resourceType} resource={resource} />
                    <Json resource={resource} error={error} />
                    {/* Conditionally render FileDownload based on resource type */}
                    {resource.resourceType &&
                        downloadableResourceTypes.includes(resource.resourceType.toString()) && (
                            <>
                                <Typography variant="h4">
                                    Open as Spreadsheet Online
                                </Typography>
                                <Link
                                    to={`/excel/4_0_0/${resource.resourceType}/${resource.id}/$summary`}
                                >
                                    {`/excel/4_0_0/${resource.resourceType}/${resource.id}/$summary`}
                                </Link>
                            </>
                        )}
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default ResourceCard;
