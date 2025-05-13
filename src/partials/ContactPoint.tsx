import {
    Box, Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';

import { TBaseResourceProps } from '../types/baseTypes';
import { TContactPoint } from '../types/partials/ContactPoint';

type TContactPointProps = TBaseResourceProps & {
  contactPoint: TContactPoint|TContactPoint[]|undefined;
};

function ContactPoint({ contactPoint: contacts, name, resourceType }: TContactPointProps) {
  // Ensuring contacts is an array
  if (contacts && !Array.isArray(contacts)) {
    contacts = [contacts];
  }

  // Render null if there are no valid contacts
  if (!contacts || contacts.length === 0 || !contacts[0]) {
    return null;
  }

  return (
    <Box>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>{name}</Typography>
      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>System</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Use</TableCell>
              <TableCell>Rank</TableCell>
              <TableCell>Period</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map(
              (contact: TContactPoint, index: Number) =>
                contact && (
                  <TableRow key={`${index}`}>
                    <TableCell>{contact.id}</TableCell>
                    <TableCell>{contact.system}</TableCell>
                    <TableCell>
                      {contact.system === 'email' ? (
                        <a
                          href={`/4_0_0/${resourceType}?email=${encodeURIComponent(contact.value?.toString() ?? '')}`}
                        >
                          {contact.value}
                        </a>
                      ) : contact.system === 'phone' ? (
                        <a
                          href={`/4_0_0/${resourceType}?phone=${encodeURIComponent(contact.value?.toString() ?? '')}`}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        contact.value
                      )}
                    </TableCell>
                    <TableCell>{contact.use}</TableCell>
                    <TableCell>{`${contact.rank || ''}`}</TableCell>
                    <TableCell>{`${contact.period || ''}`}</TableCell>
                  </TableRow>
                ),
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ContactPoint;
