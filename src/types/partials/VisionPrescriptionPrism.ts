// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TDecimal } from '../simpleTypes/Decimal';

export type TVisionPrescriptionPrism = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    amount: TDecimal;
    base: String;
};

