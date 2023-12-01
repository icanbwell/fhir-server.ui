import { createContext } from 'react';

const EnvContext = createContext<{
  fhirUrl: string|undefined
}>({
  fhirUrl: undefined,
});

export default EnvContext;
