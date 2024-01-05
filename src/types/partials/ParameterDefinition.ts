/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

import { TExtension } from '../partials/Extension';
import { TInt } from '../simpleTypes/Int';
import { TCanonical } from '../simpleTypes/Canonical';

export type TParameterDefinition = {
    id?: String;
    extension?: TExtension[];
    name?: String;
    use: String;
    min?: TInt;
    max?: String;
    documentation?: String;
    type: String;
    profile?: TCanonical;
};
