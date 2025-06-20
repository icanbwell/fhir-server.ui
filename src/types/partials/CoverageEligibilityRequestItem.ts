// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TInt } from '../simpleTypes/Int';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TReference } from '../partials/Reference';
import { TQuantity } from '../partials/Quantity';
import { TMoney } from '../partials/Money';
import { TCoverageEligibilityRequestDiagnosis } from '../partials/CoverageEligibilityRequestDiagnosis';

export type TCoverageEligibilityRequestItem = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    supportingInfoSequence?: TInt[];
    category?: TCodeableConcept;
    productOrService?: TCodeableConcept;
    modifier?: TCodeableConcept[];
    provider?: TReference;
    quantity?: TQuantity;
    unitPrice?: TMoney;
    facility?: TReference;
    diagnosis?: TCoverageEligibilityRequestDiagnosis[];
    detail?: TReference[];
};

