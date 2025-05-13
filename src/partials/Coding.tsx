import {
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Link,
    Box, Paper,
} from '@mui/material';
import { TBaseResourceProps } from '../types/baseTypes';
import { TCoding } from '../types/partials/Coding';

type TCodingProps = TBaseResourceProps & {
  coding: TCoding|TCoding[]|undefined;
};

const Coding = ({ coding: codings, name, resourceType, searchParameter }: TCodingProps) => {
  // Ensure codings is always an array
  if (codings && !Array.isArray(codings)) {
    codings = [codings];
  }

  return (
    codings &&
    codings.length > 0 &&
    codings[0] && (
      <Box>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>{name}</Typography>
        <TableContainer component={Paper} variant="outlined">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>System</TableCell>
                <TableCell>Code</TableCell>
                <TableCell>Display</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {codings.map(
                (coding: TCoding, index: Number) =>
                  coding && (
                    <TableRow key={`${index}`}>
                      <TableCell>
                        {searchParameter ? (
                          <Link
                            href={`/4_0_0/${resourceType}?${searchParameter}=${coding.system}|`}
                          >
                            {coding.system}
                          </Link>
                        ) : (
                          coding.system
                        )}
                      </TableCell>
                      <TableCell>
                        {searchParameter ? (
                          <Link
                            href={`/4_0_0/${resourceType}?${searchParameter}=${coding.system}|${coding.code}`}
                          >
                            {coding.code}
                          </Link>
                        ) : (
                          coding.code
                        )}
                      </TableCell>
                      <TableCell>{coding.display}</TableCell>
                    </TableRow>
                  ),
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    )
  );
};

export default Coding;
