/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TDateTime } from '../simpleTypes/DateTime';

export type TSubstanceDefinitionOfficial = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    authority?: TCodeableConcept;
    status?: TCodeableConcept;
    date?: TDateTime;
};
