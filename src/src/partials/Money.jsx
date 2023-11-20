import { Typography, Box } from '@mui/material';

const Money = ({ name, money }) => {
  // Return null if value is not defined
  if (money === undefined) {
    return null;
  }
  if (name === undefined || name.length === 0) {
    return (
    <Box>
      <Typography variant="body1" component="div">
        '$' + {money}
      </Typography>
    </Box>
    );
  } else {
  return (
    <Box>
      <Typography variant="body1" component="div">
        <b>{name}:</b>&nbsp;'$' + {money}
      </Typography>
    </Box>
    );
  }
};

export default Money;

