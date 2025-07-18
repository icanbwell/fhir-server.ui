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
import { TAnnotation } from '../partials/Annotation';
import { TDosage } from '../partials/Dosage';

export type TMedicationStatement = {
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
    statusReason?: TCodeableConcept[];
    category?: TCodeableConcept;
    medicationCodeableConcept?: TCodeableConcept;
    medicationReference?: TReference;
    subject: TReference;
    context?: TReference;
    effectiveDateTime?: TDateTime;
    effectivePeriod?: TPeriod;
    dateAsserted?: TDateTime;
    informationSource?: TReference;
    derivedFrom?: TReference[];
    reasonCode?: TCodeableConcept[];
    reasonReference?: TReference[];
    note?: TAnnotation[];
    dosage?: TDosage[];
};

