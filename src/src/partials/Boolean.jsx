import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Boolean = ({ boolean, name }) => {
  if (boolean !== undefined) {
    return (
      <Box>
        <Typography variant="body1">
          <b>{name}:</b>&nbsp;{boolean ? 'True' : 'False'}
        </Typography>
      </Box>
    );
  } else {
    return null;
  }
};

export default Boolean;
