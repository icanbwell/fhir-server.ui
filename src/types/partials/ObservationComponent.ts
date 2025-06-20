// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TQuantity } from '../partials/Quantity';
import { TInt } from '../simpleTypes/Int';
import { TRange } from '../partials/Range';
import { TRatio } from '../partials/Ratio';
import { TSampledData } from '../partials/SampledData';
import { TTime } from '../simpleTypes/Time';
import { TDateTime } from '../simpleTypes/DateTime';
import { TPeriod } from '../partials/Period';
import { TObservationReferenceRange } from '../partials/ObservationReferenceRange';

export type TObservationComponent = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    code: TCodeableConcept;
    valueQuantity?: TQuantity;
    valueCodeableConcept?: TCodeableConcept;
    valueString?: String;
    valueBoolean?: Boolean;
    valueInteger?: TInt;
    valueRange?: TRange;
    valueRatio?: TRatio;
    valueSampledData?: TSampledData;
    valueTime?: TTime;
    valueDateTime?: TDateTime;
    valuePeriod?: TPeriod;
    dataAbsentReason?: TCodeableConcept;
    interpretation?: TCodeableConcept[];
    referenceRange?: TObservationReferenceRange[];
};

