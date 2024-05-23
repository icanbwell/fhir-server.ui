/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCitationPublishedIn } from '../partials/CitationPublishedIn';
import { TCitationPeriodicRelease } from '../partials/CitationPeriodicRelease';
import { TDateTime } from '../simpleTypes/DateTime';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TMarkdown } from '../simpleTypes/Markdown';

export type TCitationPublicationForm = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    publishedIn?: TCitationPublishedIn;
    periodicRelease?: TCitationPeriodicRelease;
    articleDate?: TDateTime;
    lastRevisionDate?: TDateTime;
    language?: TCodeableConcept[];
    accessionNumber?: String;
    pageString?: String;
    firstPage?: String;
    lastPage?: String;
    pageCount?: String;
    copyright?: TMarkdown;
};
