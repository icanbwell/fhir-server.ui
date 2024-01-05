/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

import { TExtension } from '../partials/Extension';
import { TUri } from '../simpleTypes/Uri';
import { TCoding } from '../partials/Coding';
import { TQuestionnaireEnableWhen } from '../partials/QuestionnaireEnableWhen';
import { TInt } from '../simpleTypes/Int';
import { TCanonical } from '../simpleTypes/Canonical';
import { TQuestionnaireAnswerOption } from '../partials/QuestionnaireAnswerOption';
import { TQuestionnaireInitial } from '../partials/QuestionnaireInitial';

export type TQuestionnaireItem = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    linkId: String;
    definition?: TUri;
    code?: TCoding[];
    prefix?: String;
    text?: String;
    type: String;
    enableWhen?: TQuestionnaireEnableWhen[];
    enableBehavior?: String;
    required?: Boolean;
    repeats?: Boolean;
    readOnly?: Boolean;
    maxLength?: TInt;
    answerValueSet?: TCanonical;
    answerOption?: TQuestionnaireAnswerOption[];
    initial?: TQuestionnaireInitial[];
    item?: TQuestionnaireItem[];
};
