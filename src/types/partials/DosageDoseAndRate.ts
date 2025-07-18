// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TRange } from '../partials/Range';
import { TQuantity } from '../partials/Quantity';
import { TRatio } from '../partials/Ratio';

export type TDosageDoseAndRate = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    type?: TCodeableConcept;
    doseRange?: TRange;
    doseQuantity?: TQuantity;
    rateRatio?: TRatio;
    rateRange?: TRange;
    rateQuantity?: TQuantity;
};

