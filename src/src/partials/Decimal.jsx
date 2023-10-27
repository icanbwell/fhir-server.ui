import { Typography } from '@mui/material';

const Decimal = ({ name, decimal }) => {
  if (!decimal) {
    return null;
  }

  return (
    <Typography component="div">
      <b>{name}:</b>&nbsp;{decimal}
    </Typography>
  );
};

export default Decimal;
