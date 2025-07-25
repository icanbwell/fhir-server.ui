// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableReference } from '../partials/CodeableReference';
import { TCodeableConcept } from '../partials/CodeableConcept';

export type TMedicinalProductDefinitionCrossReference = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    product: TCodeableReference;
    type?: TCodeableConcept;
};

