// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TReference } from '../partials/Reference';
import { TCoding } from '../partials/Coding';
import { TContractContext } from '../partials/ContractContext';
import { TPeriod } from '../partials/Period';
import { TContractAnswer } from '../partials/ContractAnswer';
import { TUnsignedInt } from '../simpleTypes/UnsignedInt';
import { TContractValuedItem } from '../partials/ContractValuedItem';

export type TContractAsset = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    scope?: TCodeableConcept;
    type?: TCodeableConcept[];
    typeReference?: TReference[];
    subtype?: TCodeableConcept[];
    relationship?: TCoding;
    context?: TContractContext[];
    condition?: String;
    periodType?: TCodeableConcept[];
    period?: TPeriod[];
    usePeriod?: TPeriod[];
    text?: String;
    linkId?: String[];
    answer?: TContractAnswer[];
    securityLabelNumber?: TUnsignedInt[];
    valuedItem?: TContractValuedItem[];
};

