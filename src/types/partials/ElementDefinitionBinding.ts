/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCanonical } from '../simpleTypes/Canonical';

export type TElementDefinitionBinding = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    strength: String;
    description?: String;
    valueSet?: TCanonical;
};

