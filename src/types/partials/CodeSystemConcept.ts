/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeSystemDesignation } from '../partials/CodeSystemDesignation';
import { TCodeSystemProperty1 } from '../partials/CodeSystemProperty1';

export type TCodeSystemConcept = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    code: String;
    display?: String;
    definition?: String;
    designation?: TCodeSystemDesignation[];
    property?: TCodeSystemProperty1[];
    concept?: TCodeSystemConcept[];
};
