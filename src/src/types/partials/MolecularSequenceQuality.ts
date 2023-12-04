/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TInt } from '../simpleTypes/Int';
import { TQuantity } from '../partials/Quantity';
import { TDecimal } from '../simpleTypes/Decimal';
import { TMolecularSequenceRoc } from '../partials/MolecularSequenceRoc';

export type TMolecularSequenceQuality = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    type: String;
    standardSequence?: TCodeableConcept;
    start?: TInt;
    end?: TInt;
    score?: TQuantity;
    method?: TCodeableConcept;
    truthTP?: TDecimal;
    queryTP?: TDecimal;
    truthFN?: TDecimal;
    queryFP?: TDecimal;
    gtFP?: TDecimal;
    precision?: TDecimal;
    recall?: TDecimal;
    fScore?: TDecimal;
    roc?: TMolecularSequenceRoc;
};
