/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';

export type TCoverageClass = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    type: TCodeableConcept;
    value: String;
    name?: String;
};
