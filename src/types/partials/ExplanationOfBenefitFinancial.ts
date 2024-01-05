/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TUnsignedInt } from '../simpleTypes/UnsignedInt';
import { TMoney } from '../partials/Money';

export type TExplanationOfBenefitFinancial = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    type: TCodeableConcept;
    allowedUnsignedInt?: TUnsignedInt;
    allowedString?: String;
    allowedMoney?: TMoney;
    usedUnsignedInt?: TUnsignedInt;
    usedMoney?: TMoney;
};
