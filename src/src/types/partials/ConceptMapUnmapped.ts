/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCanonical } from '../simpleTypes/Canonical';

export type TConceptMapUnmapped = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    mode: String;
    code?: String;
    display?: String;
    url?: TCanonical;
};
