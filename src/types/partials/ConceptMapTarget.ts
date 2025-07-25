// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TConceptMapDependsOn } from '../partials/ConceptMapDependsOn';

export type TConceptMapTarget = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    code?: String;
    display?: String;
    equivalence: String;
    comment?: String;
    dependsOn?: TConceptMapDependsOn[];
    product?: TConceptMapDependsOn[];
};

