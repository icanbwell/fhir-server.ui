/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_types so do not edit manually

import { TMeta } from '../partials/Meta';
import { TUri } from '../simpleTypes/Uri';
import { TNarrative } from '../partials/Narrative';
import { TResourceContainer } from '../simpleTypes/ResourceContainer';
import { TExtension } from '../partials/Extension';
import { TIdentifier } from '../partials/Identifier';
import { TDateTime } from '../simpleTypes/DateTime';
import { TContactDetail } from '../partials/ContactDetail';
import { TMarkdown } from '../simpleTypes/Markdown';
import { TUsageContext } from '../partials/UsageContext';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TDate } from '../simpleTypes/Date';
import { TPeriod } from '../partials/Period';
import { TCitationSummary } from '../partials/CitationSummary';
import { TCitationClassification } from '../partials/CitationClassification';
import { TAnnotation } from '../partials/Annotation';
import { TCitationStatusDate } from '../partials/CitationStatusDate';
import { TCitationRelatesTo } from '../partials/CitationRelatesTo';
import { TCitationCitedArtifact } from '../partials/CitationCitedArtifact';

export type TCitation = {
    resourceType?: String;
    id?: String;
    meta?: TMeta;
    implicitRules?: TUri;
    language?: String;
    text?: TNarrative;
    contained?: TResourceContainer[];
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    url?: TUri;
    identifier?: TIdentifier[];
    version?: String;
    name?: String;
    title?: String;
    status: String;
    experimental?: Boolean;
    date?: TDateTime;
    publisher?: String;
    contact?: TContactDetail[];
    description?: TMarkdown;
    useContext?: TUsageContext[];
    jurisdiction?: TCodeableConcept[];
    purpose?: TMarkdown;
    copyright?: TMarkdown;
    approvalDate?: TDate;
    lastReviewDate?: TDate;
    effectivePeriod?: TPeriod;
    author?: TContactDetail[];
    editor?: TContactDetail[];
    reviewer?: TContactDetail[];
    endorser?: TContactDetail[];
    summary?: TCitationSummary[];
    classification?: TCitationClassification[];
    note?: TAnnotation[];
    currentState?: TCodeableConcept[];
    statusDate?: TCitationStatusDate[];
    relatesTo?: TCitationRelatesTo[];
    citedArtifact?: TCitationCitedArtifact;
};
