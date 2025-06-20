// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TTiming } from '../partials/Timing';
import { TQuantity } from '../partials/Quantity';

export type TNutritionOrderSupplement = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    type?: TCodeableConcept;
    productName?: String;
    schedule?: TTiming[];
    quantity?: TQuantity;
    instruction?: String;
};

