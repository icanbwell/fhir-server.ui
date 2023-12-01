import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import { TResource } from '../types/resources/Resource';

const Json = ({ resource }: { resource: TResource}) => {
  return (
    <React.Fragment>
      <Typography variant="h4">Raw Json</Typography>
      <Link
        href={`/4_0_0/${resource.resourceType}/${resource.id}?_format=json`}
        target="_blank"
        rel="noopener noreferrer"
      >{`/4_0_0/${resource.resourceType}/${resource.id}?_format=json`}</Link>
    </React.Fragment>
  );
};

export default Json;
