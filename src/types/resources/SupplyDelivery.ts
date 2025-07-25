// This file is auto-generated by generate_types so do not edit manually

import { TMeta } from '../partials/Meta';
import { TUri } from '../simpleTypes/Uri';
import { TNarrative } from '../partials/Narrative';
import { TResourceContainer } from '../simpleTypes/ResourceContainer';
import { TExtension } from '../partials/Extension';
import { TIdentifier } from '../partials/Identifier';
import { TReference } from '../partials/Reference';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TSupplyDeliverySuppliedItem } from '../partials/SupplyDeliverySuppliedItem';
import { TDateTime } from '../simpleTypes/DateTime';
import { TPeriod } from '../partials/Period';
import { TTiming } from '../partials/Timing';

export type TSupplyDelivery = {
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
    basedOn?: TReference[];
    partOf?: TReference[];
    status?: String;
    patient?: TReference;
    type?: TCodeableConcept;
    suppliedItem?: TSupplyDeliverySuppliedItem;
    occurrenceDateTime?: TDateTime;
    occurrencePeriod?: TPeriod;
    occurrenceTiming?: TTiming;
    supplier?: TReference;
    destination?: TReference;
    receiver?: TReference[];
};

