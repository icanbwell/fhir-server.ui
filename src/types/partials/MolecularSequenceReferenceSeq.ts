// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TReference } from '../partials/Reference';
import { TInt } from '../simpleTypes/Int';

export type TMolecularSequenceReferenceSeq = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    chromosome?: TCodeableConcept;
    genomeBuild?: String;
    orientation?: String;
    referenceSeqId?: TCodeableConcept;
    referenceSeqPointer?: TReference;
    referenceSeqString?: String;
    strand?: String;
    windowStart?: TInt;
    windowEnd?: TInt;
};

