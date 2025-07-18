// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TMarkdown } from '../simpleTypes/Markdown';
import { TExampleScenarioContainedInstance } from '../partials/ExampleScenarioContainedInstance';

export type TExampleScenarioOperation = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    number: String;
    type?: String;
    name?: String;
    initiator?: String;
    receiver?: String;
    description?: TMarkdown;
    initiatorActive?: Boolean;
    receiverActive?: Boolean;
    request?: TExampleScenarioContainedInstance;
    response?: TExampleScenarioContainedInstance;
};

