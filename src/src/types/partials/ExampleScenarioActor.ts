/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

import { TExtension } from '../partials/Extension';
import { TMarkdown } from '../simpleTypes/Markdown';

export type TExampleScenarioActor = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    actorId: String;
    type: String;
    name?: String;
    description?: TMarkdown;
};
