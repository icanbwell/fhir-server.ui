// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TContactDetail } from '../partials/ContactDetail';

export type TContributor = {
    id?: String;
    extension?: TExtension[];
    type: String;
    name: String;
    contact?: TContactDetail[];
};

