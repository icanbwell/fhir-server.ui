import {
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Box, Paper,
} from '@mui/material';
import { TBaseResourceProps } from '../types/baseTypes';
import { TPeriod } from '../types/partials/Period';

type TPeriodProps = TBaseResourceProps & {
  period: TPeriod|TPeriod[]|undefined;
};

const Period = ({ period: periods, name }: TPeriodProps) => {
  // Ensure periods is always an array
  if (periods && !Array.isArray(periods)) {
    periods = [periods];
  }

  if (periods && periods.length > 0 && periods[0]) {
    return (
      <Box>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>{name}</Typography>
        <TableContainer component={Paper} variant="outlined">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Start</TableCell>
                <TableCell>End</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {periods.map(
                (period: TPeriod, index: Number) =>
                  period && (
                    <TableRow key={`${index}`}>
                      <TableCell>{period.start}</TableCell>
                      <TableCell>{period.end}</TableCell>
                    </TableRow>
                  ),
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }

  // In case there are no periods, we return null, not to render anything
  return null;
};

export default Period;
