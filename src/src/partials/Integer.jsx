import { Typography, Box } from '@mui/material';

const Integer = ({ name, integer }) => {
  if (integer !== undefined) {
    return (
      <Box>
        <Typography variant="body1" component="div">
          <b>{name}:</b>&nbsp;{integer}
        </Typography>
      </Box>
    );
  } else {
    return null;
  }
};

export default Integer;
