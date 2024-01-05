/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCoding } from '../partials/Coding';
import { TElementDefinitionSlicing } from '../partials/ElementDefinitionSlicing';
import { TMarkdown } from '../simpleTypes/Markdown';
import { TUnsignedInt } from '../simpleTypes/UnsignedInt';
import { TElementDefinitionBase } from '../partials/ElementDefinitionBase';
import { TUri } from '../simpleTypes/Uri';
import { TElementDefinitionType } from '../partials/ElementDefinitionType';
import { TBase64Binary } from '../simpleTypes/Base64Binary';
import { TCanonical } from '../simpleTypes/Canonical';
import { TDate } from '../simpleTypes/Date';
import { TDateTime } from '../simpleTypes/DateTime';
import { TDecimal } from '../simpleTypes/Decimal';
import { TId } from '../simpleTypes/Id';
import { TInstant } from '../simpleTypes/Instant';
import { TInt } from '../simpleTypes/Int';
import { TOid } from '../simpleTypes/Oid';
import { TTime } from '../simpleTypes/Time';
import { TUrl } from '../simpleTypes/Url';
import { TUuid } from '../simpleTypes/Uuid';
import { TAddress } from '../partials/Address';
import { TQuantity } from '../partials/Quantity';
import { TAnnotation } from '../partials/Annotation';
import { TAttachment } from '../partials/Attachment';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TContactPoint } from '../partials/ContactPoint';
import { THumanName } from '../partials/HumanName';
import { TIdentifier } from '../partials/Identifier';
import { TMoney } from '../partials/Money';
import { TPeriod } from '../partials/Period';
import { TRange } from '../partials/Range';
import { TRatio } from '../partials/Ratio';
import { TReference } from '../partials/Reference';
import { TSampledData } from '../partials/SampledData';
import { TSignature } from '../partials/Signature';
import { TTiming } from '../partials/Timing';
import { TContactDetail } from '../partials/ContactDetail';
import { TContributor } from '../partials/Contributor';
import { TDataRequirement } from '../partials/DataRequirement';
import { TExpression } from '../partials/Expression';
import { TParameterDefinition } from '../partials/ParameterDefinition';
import { TRelatedArtifact } from '../partials/RelatedArtifact';
import { TTriggerDefinition } from '../partials/TriggerDefinition';
import { TUsageContext } from '../partials/UsageContext';
import { TDosage } from '../partials/Dosage';
import { TMeta } from '../partials/Meta';
import { TElementDefinitionExample } from '../partials/ElementDefinitionExample';
import { TElementDefinitionConstraint } from '../partials/ElementDefinitionConstraint';
import { TElementDefinitionBinding } from '../partials/ElementDefinitionBinding';
import { TElementDefinitionMapping } from '../partials/ElementDefinitionMapping';

export type TElementDefinition = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    path: String;
    representation?: String[];
    sliceName?: String;
    sliceIsConstraining?: Boolean;
    label?: String;
    code?: TCoding[];
    slicing?: TElementDefinitionSlicing;
    short?: String;
    definition?: TMarkdown;
    comment?: TMarkdown;
    requirements?: TMarkdown;
    alias?: String[];
    min?: TUnsignedInt;
    max?: String;
    base?: TElementDefinitionBase;
    contentReference?: TUri;
    type?: TElementDefinitionType[];
    defaultValueBase64Binary?: TBase64Binary;
    defaultValueBoolean?: Boolean;
    defaultValueCanonical?: TCanonical;
    defaultValueCode?: String;
    defaultValueDate?: TDate;
    defaultValueDateTime?: TDateTime;
    defaultValueDecimal?: TDecimal;
    defaultValueId?: TId;
    defaultValueInstant?: TInstant;
    defaultValueInteger?: TInt;
    defaultValueMarkdown?: TMarkdown;
    defaultValueOid?: TOid;
    defaultValuePositiveInt?: TInt;
    defaultValueString?: String;
    defaultValueTime?: TTime;
    defaultValueUnsignedInt?: TUnsignedInt;
    defaultValueUri?: TUri;
    defaultValueUrl?: TUrl;
    defaultValueUuid?: TUuid;
    defaultValueAddress?: TAddress;
    defaultValueAge?: TQuantity;
    defaultValueAnnotation?: TAnnotation;
    defaultValueAttachment?: TAttachment;
    defaultValueCodeableConcept?: TCodeableConcept;
    defaultValueCoding?: TCoding;
    defaultValueContactPoint?: TContactPoint;
    defaultValueCount?: TQuantity;
    defaultValueDistance?: TQuantity;
    defaultValueDuration?: TQuantity;
    defaultValueHumanName?: THumanName;
    defaultValueIdentifier?: TIdentifier;
    defaultValueMoney?: TMoney;
    defaultValuePeriod?: TPeriod;
    defaultValueQuantity?: TQuantity;
    defaultValueRange?: TRange;
    defaultValueRatio?: TRatio;
    defaultValueReference?: TReference;
    defaultValueSampledData?: TSampledData;
    defaultValueSignature?: TSignature;
    defaultValueTiming?: TTiming;
    defaultValueContactDetail?: TContactDetail;
    defaultValueContributor?: TContributor;
    defaultValueDataRequirement?: TDataRequirement;
    defaultValueExpression?: TExpression;
    defaultValueParameterDefinition?: TParameterDefinition;
    defaultValueRelatedArtifact?: TRelatedArtifact;
    defaultValueTriggerDefinition?: TTriggerDefinition;
    defaultValueUsageContext?: TUsageContext;
    defaultValueDosage?: TDosage;
    defaultValueMeta?: TMeta;
    meaningWhenMissing?: TMarkdown;
    orderMeaning?: String;
    fixedBase64Binary?: TBase64Binary;
    fixedBoolean?: Boolean;
    fixedCanonical?: TCanonical;
    fixedCode?: String;
    fixedDate?: TDate;
    fixedDateTime?: TDateTime;
    fixedDecimal?: TDecimal;
    fixedId?: TId;
    fixedInstant?: TInstant;
    fixedInteger?: TInt;
    fixedMarkdown?: TMarkdown;
    fixedOid?: TOid;
    fixedPositiveInt?: TInt;
    fixedString?: String;
    fixedTime?: TTime;
    fixedUnsignedInt?: TUnsignedInt;
    fixedUri?: TUri;
    fixedUrl?: TUrl;
    fixedUuid?: TUuid;
    fixedAddress?: TAddress;
    fixedAge?: TQuantity;
    fixedAnnotation?: TAnnotation;
    fixedAttachment?: TAttachment;
    fixedCodeableConcept?: TCodeableConcept;
    fixedCoding?: TCoding;
    fixedContactPoint?: TContactPoint;
    fixedCount?: TQuantity;
    fixedDistance?: TQuantity;
    fixedDuration?: TQuantity;
    fixedHumanName?: THumanName;
    fixedIdentifier?: TIdentifier;
    fixedMoney?: TMoney;
    fixedPeriod?: TPeriod;
    fixedQuantity?: TQuantity;
    fixedRange?: TRange;
    fixedRatio?: TRatio;
    fixedReference?: TReference;
    fixedSampledData?: TSampledData;
    fixedSignature?: TSignature;
    fixedTiming?: TTiming;
    fixedContactDetail?: TContactDetail;
    fixedContributor?: TContributor;
    fixedDataRequirement?: TDataRequirement;
    fixedExpression?: TExpression;
    fixedParameterDefinition?: TParameterDefinition;
    fixedRelatedArtifact?: TRelatedArtifact;
    fixedTriggerDefinition?: TTriggerDefinition;
    fixedUsageContext?: TUsageContext;
    fixedDosage?: TDosage;
    fixedMeta?: TMeta;
    patternBase64Binary?: TBase64Binary;
    patternBoolean?: Boolean;
    patternCanonical?: TCanonical;
    patternCode?: String;
    patternDate?: TDate;
    patternDateTime?: TDateTime;
    patternDecimal?: TDecimal;
    patternId?: TId;
    patternInstant?: TInstant;
    patternInteger?: TInt;
    patternMarkdown?: TMarkdown;
    patternOid?: TOid;
    patternPositiveInt?: TInt;
    patternString?: String;
    patternTime?: TTime;
    patternUnsignedInt?: TUnsignedInt;
    patternUri?: TUri;
    patternUrl?: TUrl;
    patternUuid?: TUuid;
    patternAddress?: TAddress;
    patternAge?: TQuantity;
    patternAnnotation?: TAnnotation;
    patternAttachment?: TAttachment;
    patternCodeableConcept?: TCodeableConcept;
    patternCoding?: TCoding;
    patternContactPoint?: TContactPoint;
    patternCount?: TQuantity;
    patternDistance?: TQuantity;
    patternDuration?: TQuantity;
    patternHumanName?: THumanName;
    patternIdentifier?: TIdentifier;
    patternMoney?: TMoney;
    patternPeriod?: TPeriod;
    patternQuantity?: TQuantity;
    patternRange?: TRange;
    patternRatio?: TRatio;
    patternReference?: TReference;
    patternSampledData?: TSampledData;
    patternSignature?: TSignature;
    patternTiming?: TTiming;
    patternContactDetail?: TContactDetail;
    patternContributor?: TContributor;
    patternDataRequirement?: TDataRequirement;
    patternExpression?: TExpression;
    patternParameterDefinition?: TParameterDefinition;
    patternRelatedArtifact?: TRelatedArtifact;
    patternTriggerDefinition?: TTriggerDefinition;
    patternUsageContext?: TUsageContext;
    patternDosage?: TDosage;
    patternMeta?: TMeta;
    example?: TElementDefinitionExample[];
    minValueDate?: TDate;
    minValueDateTime?: TDateTime;
    minValueInstant?: TInstant;
    minValueTime?: TTime;
    minValueDecimal?: TDecimal;
    minValueInteger?: TInt;
    minValuePositiveInt?: TInt;
    minValueUnsignedInt?: TUnsignedInt;
    minValueQuantity?: TQuantity;
    maxValueDate?: TDate;
    maxValueDateTime?: TDateTime;
    maxValueInstant?: TInstant;
    maxValueTime?: TTime;
    maxValueDecimal?: TDecimal;
    maxValueInteger?: TInt;
    maxValuePositiveInt?: TInt;
    maxValueUnsignedInt?: TUnsignedInt;
    maxValueQuantity?: TQuantity;
    maxLength?: TInt;
    condition?: TId[];
    constraint?: TElementDefinitionConstraint[];
    mustSupport?: Boolean;
    isModifier?: Boolean;
    isModifierReason?: String;
    isSummary?: Boolean;
    binding?: TElementDefinitionBinding;
    mapping?: TElementDefinitionMapping[];
};
