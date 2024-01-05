/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

import { TExtension } from '../partials/Extension';
import { TId } from '../simpleTypes/Id';
import { TQuantity } from '../partials/Quantity';
import { TRange } from '../partials/Range';

export type TPlanDefinitionRelatedAction = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    actionId: TId;
    relationship: String;
    offsetDuration?: TQuantity;
    offsetRange?: TRange;
};
