/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TQuantity } from '../partials/Quantity';
import { TMoney } from '../partials/Money';
import { TDecimal } from '../simpleTypes/Decimal';
import { TInt } from '../simpleTypes/Int';
import { TClaimResponseAdjudication } from '../partials/ClaimResponseAdjudication';

export type TClaimResponseSubDetail1 = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    productOrService: TCodeableConcept;
    modifier?: TCodeableConcept[];
    quantity?: TQuantity;
    unitPrice?: TMoney;
    factor?: TDecimal;
    net?: TMoney;
    noteNumber?: TInt[];
    adjudication: TClaimResponseAdjudication[];
};
