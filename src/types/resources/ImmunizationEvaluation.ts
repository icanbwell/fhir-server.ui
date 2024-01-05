/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

import { TId } from '../simpleTypes/Id';
import { TMeta } from '../partials/Meta';
import { TUri } from '../simpleTypes/Uri';
import { TNarrative } from '../partials/Narrative';
import { TResourceContainer } from '../simpleTypes/ResourceContainer';
import { TExtension } from '../partials/Extension';
import { TIdentifier } from '../partials/Identifier';
import { TReference } from '../partials/Reference';
import { TDateTime } from '../simpleTypes/DateTime';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TInt } from '../simpleTypes/Int';

export type TImmunizationEvaluation = {
    resourceType?: String;
    id?: TId;
    meta?: TMeta;
    implicitRules?: TUri;
    language?: String;
    text?: TNarrative;
    contained?: TResourceContainer[];
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    identifier?: TIdentifier[];
    status: String;
    patient: TReference;
    date?: TDateTime;
    authority?: TReference;
    targetDisease: TCodeableConcept;
    immunizationEvent: TReference;
    doseStatus: TCodeableConcept;
    doseStatusReason?: TCodeableConcept[];
    description?: String;
    series?: String;
    doseNumberPositiveInt?: TInt;
    doseNumberString?: String;
    seriesDosesPositiveInt?: TInt;
    seriesDosesString?: String;
};
