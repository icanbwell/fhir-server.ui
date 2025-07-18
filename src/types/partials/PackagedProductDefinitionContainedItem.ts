// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableReference } from '../partials/CodeableReference';
import { TQuantity } from '../partials/Quantity';

export type TPackagedProductDefinitionContainedItem = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    item: TCodeableReference;
    amount?: TQuantity;
};

