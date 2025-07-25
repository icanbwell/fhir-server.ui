// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TCanonical } from '../simpleTypes/Canonical';
import { TExpression } from '../partials/Expression';
import { TDataRequirement } from '../partials/DataRequirement';
import { TUsageContext } from '../partials/UsageContext';
import { TDateTime } from '../simpleTypes/DateTime';
import { TPeriod } from '../partials/Period';
import { TQuantity } from '../partials/Quantity';
import { TTiming } from '../partials/Timing';

export type TResearchElementDefinitionCharacteristic = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    definitionCodeableConcept?: TCodeableConcept;
    definitionCanonical?: TCanonical;
    definitionExpression?: TExpression;
    definitionDataRequirement?: TDataRequirement;
    usageContext?: TUsageContext[];
    exclude?: Boolean;
    unitOfMeasure?: TCodeableConcept;
    studyEffectiveDescription?: String;
    studyEffectiveDateTime?: TDateTime;
    studyEffectivePeriod?: TPeriod;
    studyEffectiveDuration?: TQuantity;
    studyEffectiveTiming?: TTiming;
    studyEffectiveTimeFromStart?: TQuantity;
    studyEffectiveGroupMeasure?: String;
    participantEffectiveDescription?: String;
    participantEffectiveDateTime?: TDateTime;
    participantEffectivePeriod?: TPeriod;
    participantEffectiveDuration?: TQuantity;
    participantEffectiveTiming?: TTiming;
    participantEffectiveTimeFromStart?: TQuantity;
    participantEffectiveGroupMeasure?: String;
};

