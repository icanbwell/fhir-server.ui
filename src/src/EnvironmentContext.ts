import { createContext } from 'react';
import { TUserDetails } from './types/baseTypes';

const EnvContext = createContext<{
  fhirUrl: string|undefined;
  userDetails: TUserDetails|undefined;
  env: any;
}>({
  fhirUrl: undefined,
  userDetails: undefined,
  env: {}
});

export default EnvContext;
