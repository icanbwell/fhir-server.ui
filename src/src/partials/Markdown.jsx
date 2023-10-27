import { Typography, Box } from '@mui/material';

const Markdown = ({ name, markdown }) => {
  if (markdown !== undefined) {
    return (
      <Box>
        <Typography variant="body1" component="div">
          <b>{name}:</b>&nbsp;{markdown}
        </Typography>
      </Box>
    );
  }
  return null;
};

export default Markdown;
