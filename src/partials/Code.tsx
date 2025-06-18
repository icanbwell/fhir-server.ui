import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { TBaseResourceProps } from '../types/baseTypes';
import { TCode } from '../types/simpleTypes/Code';

type TCodeProps = TBaseResourceProps & {
  code: TCode|TCode[]|undefined;
};

const Code = ({ code, name }: TCodeProps) => {
  if (!code) {
    return null;
  }
  if (!Array.isArray(code)) {
    code = [code];
  }

  return (
    <Box>
      {code.map((value: TCode, index: number) => (
        <Typography variant="h6" color="text.secondary" component="span" key={index}>
          <b>{name}:</b>&nbsp;{value}
        </Typography>
      ))}
    </Box>
  );
};

export default Code;
