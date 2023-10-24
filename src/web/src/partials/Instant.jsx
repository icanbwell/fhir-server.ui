import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Instant = ({name, instant}) => {
    return (
        instant ? (
            <Box>
                <Typography variant="body1">
                    <b>{name}:</b>&nbsp;{instant}
                </Typography>
            </Box>
        ) : null
    )
};

export default Instant;
