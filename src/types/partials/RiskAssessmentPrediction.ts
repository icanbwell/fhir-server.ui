// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TDecimal } from '../simpleTypes/Decimal';
import { TRange } from '../partials/Range';
import { TPeriod } from '../partials/Period';

export type TRiskAssessmentPrediction = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    outcome?: TCodeableConcept;
    probabilityDecimal?: TDecimal;
    probabilityRange?: TRange;
    qualitativeRisk?: TCodeableConcept;
    relativeRisk?: TDecimal;
    whenPeriod?: TPeriod;
    whenRange?: TRange;
    rationale?: String;
};

