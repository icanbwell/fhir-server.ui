// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TReference } from '../partials/Reference';
import { TCanonical } from '../simpleTypes/Canonical';
import { TUrl } from '../simpleTypes/Url';

export type TImplementationGuideResource1 = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    reference: TReference;
    exampleBoolean?: Boolean;
    exampleCanonical?: TCanonical;
    relativePath?: TUrl;
};

