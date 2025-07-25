// This file is auto-generated by generate_types so do not edit manually

import { TMeta } from '../partials/Meta';
import { TUri } from '../simpleTypes/Uri';
import { TNarrative } from '../partials/Narrative';
import { TResourceContainer } from '../simpleTypes/ResourceContainer';
import { TExtension } from '../partials/Extension';
import { TIdentifier } from '../partials/Identifier';
import { TCanonical } from '../simpleTypes/Canonical';
import { TReference } from '../partials/Reference';
import { TDateTime } from '../simpleTypes/DateTime';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TNutritionOrderOralDiet } from '../partials/NutritionOrderOralDiet';
import { TNutritionOrderSupplement } from '../partials/NutritionOrderSupplement';
import { TNutritionOrderEnteralFormula } from '../partials/NutritionOrderEnteralFormula';
import { TAnnotation } from '../partials/Annotation';

export type TNutritionOrder = {
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
    instantiatesCanonical?: TCanonical[];
    instantiatesUri?: TUri[];
    instantiates?: TUri[];
    status: String;
    intent: String;
    patient: TReference;
    encounter?: TReference;
    dateTime: TDateTime;
    orderer?: TReference;
    allergyIntolerance?: TReference[];
    foodPreferenceModifier?: TCodeableConcept[];
    excludeFoodModifier?: TCodeableConcept[];
    oralDiet?: TNutritionOrderOralDiet;
    supplement?: TNutritionOrderSupplement[];
    enteralFormula?: TNutritionOrderEnteralFormula;
    note?: TAnnotation[];
};

