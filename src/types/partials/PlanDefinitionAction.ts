// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TRelatedArtifact } from '../partials/RelatedArtifact';
import { TId } from '../simpleTypes/Id';
import { TReference } from '../partials/Reference';
import { TCanonical } from '../simpleTypes/Canonical';
import { TTriggerDefinition } from '../partials/TriggerDefinition';
import { TPlanDefinitionCondition } from '../partials/PlanDefinitionCondition';
import { TDataRequirement } from '../partials/DataRequirement';
import { TPlanDefinitionRelatedAction } from '../partials/PlanDefinitionRelatedAction';
import { TDateTime } from '../simpleTypes/DateTime';
import { TQuantity } from '../partials/Quantity';
import { TPeriod } from '../partials/Period';
import { TRange } from '../partials/Range';
import { TTiming } from '../partials/Timing';
import { TPlanDefinitionParticipant } from '../partials/PlanDefinitionParticipant';
import { TUri } from '../simpleTypes/Uri';
import { TPlanDefinitionDynamicValue } from '../partials/PlanDefinitionDynamicValue';

export type TPlanDefinitionAction = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    prefix?: String;
    title?: String;
    description?: String;
    textEquivalent?: String;
    priority?: String;
    code?: TCodeableConcept[];
    reason?: TCodeableConcept[];
    documentation?: TRelatedArtifact[];
    goalId?: TId[];
    subjectCodeableConcept?: TCodeableConcept;
    subjectReference?: TReference;
    subjectCanonical?: TCanonical;
    trigger?: TTriggerDefinition[];
    condition?: TPlanDefinitionCondition[];
    input?: TDataRequirement[];
    output?: TDataRequirement[];
    relatedAction?: TPlanDefinitionRelatedAction[];
    timingDateTime?: TDateTime;
    timingAge?: TQuantity;
    timingPeriod?: TPeriod;
    timingDuration?: TQuantity;
    timingRange?: TRange;
    timingTiming?: TTiming;
    participant?: TPlanDefinitionParticipant[];
    type?: TCodeableConcept;
    groupingBehavior?: String;
    selectionBehavior?: String;
    requiredBehavior?: String;
    precheckBehavior?: String;
    cardinalityBehavior?: String;
    definitionCanonical?: TCanonical;
    definitionUri?: TUri;
    transform?: TCanonical;
    dynamicValue?: TPlanDefinitionDynamicValue[];
    action?: TPlanDefinitionAction[];
};

