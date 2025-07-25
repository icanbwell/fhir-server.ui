// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TInt } from '../simpleTypes/Int';
import { TDecimal } from '../simpleTypes/Decimal';

export type TMolecularSequenceRoc = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    score?: TInt[];
    numTP?: TInt[];
    numFP?: TInt[];
    numFN?: TInt[];
    precision?: TDecimal[];
    sensitivity?: TDecimal[];
    fMeasure?: TDecimal[];
};

