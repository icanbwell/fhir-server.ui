// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TReference } from '../partials/Reference';
import { TAdverseEventCausality } from '../partials/AdverseEventCausality';

export type TAdverseEventSuspectEntity = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    instance: TReference;
    causality?: TAdverseEventCausality[];
};

