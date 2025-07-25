// This file is auto-generated by generate_types so do not edit manually

import { TMeta } from '../partials/Meta';
import { TUri } from '../simpleTypes/Uri';
import { TNarrative } from '../partials/Narrative';
import { TResourceContainer } from '../simpleTypes/ResourceContainer';
import { TExtension } from '../partials/Extension';
import { TIdentifier } from '../partials/Identifier';
import { TCanonical } from '../simpleTypes/Canonical';
import { TDateTime } from '../simpleTypes/DateTime';
import { TContactDetail } from '../partials/ContactDetail';
import { TMarkdown } from '../simpleTypes/Markdown';
import { TUsageContext } from '../partials/UsageContext';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TDate } from '../simpleTypes/Date';
import { TPeriod } from '../partials/Period';
import { TReference } from '../partials/Reference';
import { TChargeItemDefinitionApplicability } from '../partials/ChargeItemDefinitionApplicability';
import { TChargeItemDefinitionPropertyGroup } from '../partials/ChargeItemDefinitionPropertyGroup';

export type TChargeItemDefinition = {
    resourceType?: String;
    id?: String;
    meta?: TMeta;
    implicitRules?: TUri;
    language?: String;
    text?: TNarrative;
    contained?: TResourceContainer[];
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    url: TUri;
    identifier?: TIdentifier[];
    version?: String;
    title?: String;
    derivedFromUri?: TUri[];
    partOf?: TCanonical[];
    replaces?: TCanonical[];
    status: String;
    experimental?: Boolean;
    date?: TDateTime;
    publisher?: String;
    contact?: TContactDetail[];
    description?: TMarkdown;
    useContext?: TUsageContext[];
    jurisdiction?: TCodeableConcept[];
    copyright?: TMarkdown;
    approvalDate?: TDate;
    lastReviewDate?: TDate;
    effectivePeriod?: TPeriod;
    code?: TCodeableConcept;
    instance?: TReference[];
    applicability?: TChargeItemDefinitionApplicability[];
    propertyGroup?: TChargeItemDefinitionPropertyGroup[];
};

