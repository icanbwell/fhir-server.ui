// This file is auto-generated by generate_types so do not edit manually

import { TMeta } from '../partials/Meta';
import { TUri } from '../simpleTypes/Uri';
import { TReference } from '../partials/Reference';
import { TBase64Binary } from '../simpleTypes/Base64Binary';

export type TBinary = {
    resourceType?: String;
    id?: String;
    meta?: TMeta;
    implicitRules?: TUri;
    language?: String;
    contentType: String;
    securityContext?: TReference;
    data?: TBase64Binary;
};

