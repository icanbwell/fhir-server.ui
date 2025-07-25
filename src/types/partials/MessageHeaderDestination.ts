// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TReference } from '../partials/Reference';
import { TUrl } from '../simpleTypes/Url';

export type TMessageHeaderDestination = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    name?: String;
    target?: TReference;
    endpoint: TUrl;
    receiver?: TReference;
};

