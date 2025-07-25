// This file is auto-generated by generate_types so do not edit manually

import { TMeta } from '../partials/Meta';
import { TUri } from '../simpleTypes/Uri';
import { TNarrative } from '../partials/Narrative';
import { TResourceContainer } from '../simpleTypes/ResourceContainer';
import { TExtension } from '../partials/Extension';
import { TIdentifier } from '../partials/Identifier';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TReference } from '../partials/Reference';
import { TPeriod } from '../partials/Period';
import { TCoverageClass } from '../partials/CoverageClass';
import { TInt } from '../simpleTypes/Int';
import { TCoverageCostToBeneficiary } from '../partials/CoverageCostToBeneficiary';

export type TCoverage = {
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
    status: String;
    type?: TCodeableConcept;
    policyHolder?: TReference;
    subscriber?: TReference;
    subscriberId?: String;
    beneficiary: TReference;
    dependent?: String;
    relationship?: TCodeableConcept;
    period?: TPeriod;
    payor: TReference[];
    class_?: TCoverageClass[];
    order?: TInt;
    network?: String;
    costToBeneficiary?: TCoverageCostToBeneficiary[];
    subrogation?: Boolean;
    contract?: TReference[];
};

