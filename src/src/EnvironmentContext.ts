import { createContext } from 'react';

const EnvContext = createContext({
  fhirUrl: '',
});

export default EnvContext;
