import { Typography, Box } from '@mui/material';

const Time = ({ name, time }) => {
    if (time) {
        return (
            <Box>
                <Typography variant="body1" component="div">
                    <b>{name}:</b>&nbsp;{time}
                </Typography>
            </Box>
        );
    } else {
        return null;
    }
};

export default Time;
