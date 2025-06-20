// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TMarkdown } from '../simpleTypes/Markdown';
import { TAnnotation } from '../partials/Annotation';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TReference } from '../partials/Reference';

export type TEvidenceVariableDefinition = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    description?: TMarkdown;
    note?: TAnnotation[];
    variableRole: TCodeableConcept;
    observed?: TReference;
    intended?: TReference;
    directnessMatch?: TCodeableConcept;
};

