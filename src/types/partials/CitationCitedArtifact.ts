/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TIdentifier } from '../partials/Identifier';
import { TDateTime } from '../simpleTypes/DateTime';
import { TCitationVersion } from '../partials/CitationVersion';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TCitationStatusDate1 } from '../partials/CitationStatusDate1';
import { TCitationTitle } from '../partials/CitationTitle';
import { TCitationAbstract } from '../partials/CitationAbstract';
import { TCitationPart } from '../partials/CitationPart';
import { TCitationRelatesTo1 } from '../partials/CitationRelatesTo1';
import { TCitationPublicationForm } from '../partials/CitationPublicationForm';
import { TCitationWebLocation } from '../partials/CitationWebLocation';
import { TCitationClassification1 } from '../partials/CitationClassification1';
import { TCitationContributorship } from '../partials/CitationContributorship';
import { TAnnotation } from '../partials/Annotation';

export type TCitationCitedArtifact = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    identifier?: TIdentifier[];
    relatedIdentifier?: TIdentifier[];
    dateAccessed?: TDateTime;
    version?: TCitationVersion;
    currentState?: TCodeableConcept[];
    statusDate?: TCitationStatusDate1[];
    title?: TCitationTitle[];
    abstract?: TCitationAbstract[];
    part?: TCitationPart;
    relatesTo?: TCitationRelatesTo1[];
    publicationForm?: TCitationPublicationForm[];
    webLocation?: TCitationWebLocation[];
    classification?: TCitationClassification1[];
    contributorship?: TCitationContributorship;
    note?: TAnnotation[];
};
