import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

function HumanName({ humanName, resourceType }) {
  if (!Array.isArray(humanName)) {
    humanName = [humanName];
  }

  if (!humanName || humanName.length === 0 || !humanName[0]) {
    return null;
  }

  return (
    <Box>
      <Typography variant="h4">Name</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Use</TableCell>
              <TableCell>Family</TableCell>
              <TableCell>Given</TableCell>
              <TableCell>Text</TableCell>
              <TableCell>Period Start</TableCell>
              <TableCell>Period End</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {humanName.map(
              (name, i) =>
                name && (
                  <TableRow key={i}>
                    <TableCell>{name.id}</TableCell>
                    <TableCell>{name.use}</TableCell>
                    <TableCell>
                      <Link
                        to={`/4_0_0/${resourceType}?family=${name.family}`}
                        title={`Search for ${name.family}`}
                      >
                        {name.family}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {name.given &&
                        name.given.map((given, j) => (
                          <Link
                            key={j}
                            to={`/4_0_0/${resourceType}?given=${given}`}
                            title={`Search for ${given}`}
                          >
                            {given}
                          </Link>
                        ))}
                    </TableCell>
                    <TableCell>{name.text}</TableCell>
                    <TableCell>{name.period && name.period.start}</TableCell>
                    <TableCell>{name.period && name.period.end}</TableCell>
                  </TableRow>
                ),
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default HumanName;
