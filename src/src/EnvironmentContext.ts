import { createContext } from 'react';

const EnvContext = createContext<{
  fhirUrl: string|undefined,
  customGroups: string|undefined,
  customScope: string|undefined,
}>({
  fhirUrl: undefined,
  customGroups: undefined,
  customScope: undefined,
});

export default EnvContext;
