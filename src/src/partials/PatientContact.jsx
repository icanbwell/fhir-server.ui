import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import your partials as components
import CodeableConcept from './CodeableConcept';
import HumanNames from './HumanName';

const PatientContact = ({ patientContact, name, resourceType }) => {
  // Ensure 'value' is always an array
  const values = Array.isArray(patientContact)
    ? patientContact
    : [patientContact];

  return (
    <>
      {values && values.length > 0 && values[0] && (
        <Box>
          {values.map((contact, index) => (
            <Box key={index}>
              <Typography variant="h4">{name}</Typography>
              {
                <React.Fragment>
                  <CodeableConcept
                    resourceType={resourceType}
                    codeableConcepts={contact.relationship}
                    name="Relationship"
                  />
                  <HumanNames
                    names={contact.name}
                    resourceType={resourceType}
                  />
                </React.Fragment>
              }
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default PatientContact;
