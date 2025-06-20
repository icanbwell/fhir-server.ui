// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TDecimal } from '../simpleTypes/Decimal';
import { TInt } from '../simpleTypes/Int';
import { TVisionPrescriptionPrism } from '../partials/VisionPrescriptionPrism';
import { TQuantity } from '../partials/Quantity';
import { TAnnotation } from '../partials/Annotation';

export type TVisionPrescriptionLensSpecification = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    product: TCodeableConcept;
    eye: String;
    sphere?: TDecimal;
    cylinder?: TDecimal;
    axis?: TInt;
    prism?: TVisionPrescriptionPrism[];
    add?: TDecimal;
    power?: TDecimal;
    backCurve?: TDecimal;
    diameter?: TDecimal;
    duration?: TQuantity;
    color?: String;
    brand?: String;
    note?: TAnnotation[];
};

