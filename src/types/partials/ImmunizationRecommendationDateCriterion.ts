/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TDateTime } from '../simpleTypes/DateTime';

export type TImmunizationRecommendationDateCriterion = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    code: TCodeableConcept;
    value: TDateTime;
};
