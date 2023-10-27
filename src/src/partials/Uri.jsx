import { Typography, Link, Box } from '@mui/material';

function Uri({ uri }) {
  const { name, value } = uri;
  return (
    value && (
      <Box>
        <Typography variant="body1" display="inline">
          <b>{name}:</b>&nbsp
        </Typography>
        <Link href={value}>{value}</Link>
      </Box>
    )
  );
}

export default Uri;
