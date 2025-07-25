// This file is auto-generated by generate_types so do not edit manually

import { TMeta } from '../partials/Meta';
import { TUri } from '../simpleTypes/Uri';
import { TNarrative } from '../partials/Narrative';
import { TResourceContainer } from '../simpleTypes/ResourceContainer';
import { TExtension } from '../partials/Extension';
import { TIdentifier } from '../partials/Identifier';
import { TReference } from '../partials/Reference';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TDateTime } from '../simpleTypes/DateTime';
import { TPeriod } from '../partials/Period';
import { TInstant } from '../simpleTypes/Instant';
import { TInt } from '../simpleTypes/Int';
import { TDecimal } from '../simpleTypes/Decimal';
import { TAttachment } from '../partials/Attachment';
import { TAnnotation } from '../partials/Annotation';

export type TMedia = {
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
    status: String;
    type?: TCodeableConcept;
    modality?: TCodeableConcept;
    view?: TCodeableConcept;
    subject?: TReference;
    encounter?: TReference;
    createdDateTime?: TDateTime;
    createdPeriod?: TPeriod;
    issued?: TInstant;
    operator?: TReference;
    reasonCode?: TCodeableConcept[];
    bodySite?: TCodeableConcept;
    deviceName?: String;
    device?: TReference;
    height?: TInt;
    width?: TInt;
    frames?: TInt;
    duration?: TDecimal;
    content: TAttachment;
    note?: TAnnotation[];
};

