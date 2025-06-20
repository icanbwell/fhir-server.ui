// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TMarkdown } from '../simpleTypes/Markdown';

export type TCitationAbstract = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    type?: TCodeableConcept;
    language?: TCodeableConcept;
    text: TMarkdown;
    copyright?: TMarkdown;
};

