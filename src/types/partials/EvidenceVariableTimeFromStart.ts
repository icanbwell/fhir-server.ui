// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TQuantity } from '../partials/Quantity';
import { TRange } from '../partials/Range';
import { TAnnotation } from '../partials/Annotation';

export type TEvidenceVariableTimeFromStart = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    description?: String;
    quantity?: TQuantity;
    range?: TRange;
    note?: TAnnotation[];
};

