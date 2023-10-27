import { Typography } from '@mui/material';

const DateTime = ({ name, dateTime }) => {
  if (!dateTime) {
    return null;
  }

  return (
    <Typography component="div">
      <b>{name}:</b>&nbsp;{dateTime}
    </Typography>
  );
};

export default DateTime;
