/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

import { TExtension } from '../partials/Extension';
import { TInt } from '../simpleTypes/Int';
import { TReference } from '../partials/Reference';

export type TClaimResponseInsurance = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    sequence: TInt;
    focal: Boolean;
    coverage: TReference;
    businessArrangement?: String;
    claimResponse?: TReference;
};
