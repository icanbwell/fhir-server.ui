import { Typography, Link, Box } from '@mui/material';
import { TBaseResourceProps } from '../types/baseTypes';

type TReferenceProps = TBaseResourceProps & {
  reference: any;
  field?: string;
};

function Reference({ reference: references = [], name, field }: TReferenceProps) {
  // Ensure that references is an array
  if (!Array.isArray(references)) {
    references = [references];
  }

  return references && references.length > 0 && references[0] ? (
    <Box>
      <Typography variant="h4">{name}</Typography>
      {references.map((reference: any, index: Number) =>
        reference ? (
          <Link
            href={`/4_0_0/${field ? reference[`${field}`].reference : reference.reference}`}
            key={`${index}`}
            display='block'
            mb={index !== references.length - 1 ? 1 : 0}
          >
            {reference.display || (field ? reference[`${field}`].reference : reference.reference)}
          </Link>
        ) : null
      )}
    </Box>
  ) : null;
}

export default Reference;
