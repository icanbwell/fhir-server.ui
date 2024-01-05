/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCoding } from '../partials/Coding';
import { TReference } from '../partials/Reference';
import { TSignature } from '../partials/Signature';

export type TContractSigner = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    type: TCoding;
    party: TReference;
    signature: TSignature[];
};
