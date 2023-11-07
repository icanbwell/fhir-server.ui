import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Code = ({ code, name }) => {
  if (!code) {
    return null;
  }

  return (
    <Box>
      <Typography variant="body1" component="span">
        <b>{name}:</b>&nbsp;{code}
      </Typography>
    </Box>
  );
};

export default Code;
