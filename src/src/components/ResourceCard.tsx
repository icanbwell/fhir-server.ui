import { Button, Card, CardContent, CardHeader, Collapse } from '@mui/material';
import ResourceItem from './ResourceItem';
import Json from './Json';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { TResource } from '../types/resources/Resource';

const useStyles = makeStyles({
  header: {
    // backgroundColor: 'lightgray', // Light gray background color
    // color: 'darkslategray',
    fontSize: '1.5em', // Text size
    // add more styles as you wish
  },
});

type TResourceCardProps = {
  index: number;
  resource: TResource;
  expanded: Boolean;
};

const ResourceCard = ({ index, resource, expanded }: TResourceCardProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (expanded) {
      setOpen(true);
    }
  }, [expanded]);

  return (
    <Card key={index}>
      <CardHeader
        title={`(${index + 1}) ${resource.resourceType}/${resource.id}`}
        classes={{ title: classes.header }}
        action={<Button onClick={handleOpen}>{open ? 'Close' : 'Open'}</Button>}
      ></CardHeader>
      <Collapse in={open}>
        <CardContent>
          <ResourceItem
            resourceType={resource.resourceType}
            resource={resource}
          />
          <Json resource={resource} />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ResourceCard;
