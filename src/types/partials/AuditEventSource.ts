/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

import { TExtension } from '../partials/Extension';
import { TReference } from '../partials/Reference';
import { TCoding } from '../partials/Coding';

export type TAuditEventSource = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    site?: String;
    observer: TReference;
    type?: TCoding[];
};
