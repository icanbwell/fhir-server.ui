// This file is auto-generated by generate_types so do not edit manually

import { TMeta } from '../partials/Meta';
import { TUri } from '../simpleTypes/Uri';
import { TNarrative } from '../partials/Narrative';
import { TResourceContainer } from '../simpleTypes/ResourceContainer';
import { TExtension } from '../partials/Extension';
import { TIdentifier } from '../partials/Identifier';
import { TPeriod } from '../partials/Period';
import { TReference } from '../partials/Reference';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TContactPoint } from '../partials/ContactPoint';
import { TPractitionerRoleAvailableTime } from '../partials/PractitionerRoleAvailableTime';
import { TPractitionerRoleNotAvailable } from '../partials/PractitionerRoleNotAvailable';

export type TPractitionerRole = {
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
    active?: Boolean;
    period?: TPeriod;
    practitioner?: TReference;
    organization?: TReference;
    code?: TCodeableConcept[];
    specialty?: TCodeableConcept[];
    location?: TReference[];
    healthcareService?: TReference[];
    telecom?: TContactPoint[];
    availableTime?: TPractitionerRoleAvailableTime[];
    notAvailable?: TPractitionerRoleNotAvailable[];
    availabilityExceptions?: String;
    endpoint?: TReference[];
};

