// This file is auto-generated by generate_types so do not edit manually

import { TMeta } from '../partials/Meta';
import { TUri } from '../simpleTypes/Uri';
import { TNarrative } from '../partials/Narrative';
import { TResourceContainer } from '../simpleTypes/ResourceContainer';
import { TExtension } from '../partials/Extension';
import { TIdentifier } from '../partials/Identifier';
import { TReference } from '../partials/Reference';
import { TInstant } from '../simpleTypes/Instant';
import { TCodeableConcept } from '../partials/CodeableConcept';

export type TAppointmentResponse = {
    resourceType?: String;
    id?: String;
    meta?: TMeta;
    implicitRules?: TUri;
    language?: String;
    text?: TNarrative;
    contained?: TResourceContainer[];
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    identifier?: TIdentifier[];
    appointment: TReference;
    start?: TInstant;
    end?: TInstant;
    participantType?: TCodeableConcept[];
    actor?: TReference;
    participantStatus: String;
    comment?: String;
};

