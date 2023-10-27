import { Box, Typography } from '@mui/material';
import Extension from './Extension';

const Narrative = ({ narrative, name }) => {
  if (narrative !== undefined && narrative.div !== undefined) {
    return (
      <Box>
        <Typography variant="h4">{name}</Typography>&nbsp;
        <Box dangerouslySetInnerHTML={{ __html: narrative.div }} />
        <Extension extensions={narrative} />
      </Box>
    );
  } else {
    return null;
  }
};

export default Narrative;
