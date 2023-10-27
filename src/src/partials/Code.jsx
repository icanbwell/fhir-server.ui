import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';

const Code = ({ code, name }) => {
  if (!code) {
    return null;
  }

  return (
    <Box>
      <Typography variant="body1" component="span">
        <b>{name}:</b>&nbsp;
      </Typography>
      <Link href={code}>{code}</Link>
    </Box>
  );
};

export default Code;
