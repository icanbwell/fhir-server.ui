// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TPeriod } from '../partials/Period';
import { TReference } from '../partials/Reference';

export type TEncounterParticipant = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    type?: TCodeableConcept[];
    period?: TPeriod;
    individual?: TReference;
};

