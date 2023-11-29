import { Typography, Link, Box } from '@mui/material';
import { TBaseResourceProps } from '../types/baseTypes';

type TReverseReferenceProps = TBaseResourceProps & {
  reverseReferences: any;
};

function ReverseReference({ name, id, reverseReferences }: TReverseReferenceProps) {
  // Ensure reverseReferences is an array
  if (!Array.isArray(reverseReferences)) {
    reverseReferences = [reverseReferences];
  }

  return reverseReferences &&
    reverseReferences.length > 0 &&
    reverseReferences[0] ? (
    <Box>
      <Typography variant="h4">{name}</Typography>
      {reverseReferences.map((reference: any, index: Number) =>
        reference ? (
          <Link
            key={`${index}`}
            href={`/4_0_0/${reference.target}?${reference.property}=${id}`}
          >
            {`/4_0_0/${reference.target}?${reference.property}=${id}`}
          </Link>
        ) : null,
      )}
    </Box>
  ) : null;
}

export default ReverseReference;
