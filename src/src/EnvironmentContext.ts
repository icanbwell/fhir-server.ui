import React, { createContext } from 'react';
import { TUserDetails } from './types/baseTypes';

const EnvContext = createContext<{
  fhirUrl?: string;
  userDetails?: TUserDetails;
  env?: any;
  isLoggedIn: boolean;
  setIsLoggedIn?: React.Dispatch<React.SetStateAction<boolean>>
}>({
  fhirUrl: undefined,
  userDetails: undefined,
  env: {},
  isLoggedIn: false,
  setIsLoggedIn: undefined
});

export default EnvContext;
