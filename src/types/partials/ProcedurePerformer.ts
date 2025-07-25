// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TReference } from '../partials/Reference';

export type TProcedurePerformer = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    function_?: TCodeableConcept;
    actor: TReference;
    onBehalfOf?: TReference;
};

