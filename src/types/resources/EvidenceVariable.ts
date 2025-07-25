// This file is auto-generated by generate_types so do not edit manually

import { TMeta } from '../partials/Meta';
import { TUri } from '../simpleTypes/Uri';
import { TNarrative } from '../partials/Narrative';
import { TResourceContainer } from '../simpleTypes/ResourceContainer';
import { TExtension } from '../partials/Extension';
import { TIdentifier } from '../partials/Identifier';
import { TDateTime } from '../simpleTypes/DateTime';
import { TMarkdown } from '../simpleTypes/Markdown';
import { TAnnotation } from '../partials/Annotation';
import { TUsageContext } from '../partials/UsageContext';
import { TContactDetail } from '../partials/ContactDetail';
import { TRelatedArtifact } from '../partials/RelatedArtifact';
import { TEvidenceVariableCharacteristic } from '../partials/EvidenceVariableCharacteristic';
import { TEvidenceVariableCategory } from '../partials/EvidenceVariableCategory';

export type TEvidenceVariable = {
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
    shortTitle?: String;
    subtitle?: String;
    status: String;
    date?: TDateTime;
    description?: TMarkdown;
    note?: TAnnotation[];
    useContext?: TUsageContext[];
    publisher?: String;
    contact?: TContactDetail[];
    author?: TContactDetail[];
    editor?: TContactDetail[];
    reviewer?: TContactDetail[];
    endorser?: TContactDetail[];
    relatedArtifact?: TRelatedArtifact[];
    actual?: Boolean;
    characteristicCombination?: String;
    characteristic?: TEvidenceVariableCharacteristic[];
    handling?: String;
    category?: TEvidenceVariableCategory[];
};

