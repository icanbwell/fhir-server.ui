// This file is auto-generated by generate_components so do not edit manually

/**
QuestionnaireResponse
    A structured set of questions and their answers. The questions are ordered and
    grouped into coherent subsets, corresponding to the structure of the grouping
    of the questionnaire being responded to.
    If the element is present, it must have either a @value, an @id, or extensions
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { TQuestionnaireResponse } from '../../types/resources/QuestionnaireResponse';

// Import all the partial resource
import Partials from '../../partials';
import { IdentifierSystem } from '../../utils/identifierSystem';

const QuestionnaireResponse = ({ resource }: { resource: TQuestionnaireResponse }): React.ReactElement => {
    const tagUUID = resource?.meta?.tag?.find((s) => s.system === IdentifierSystem.uuid)?.code;
    const uuid = tagUUID ? tagUUID : resource.id;

    return (
        <>
            <Link title="Direct link to Resource" to={`/4_0_0/${resource.resourceType}/${uuid}`}>
                {resource.resourceType}/{uuid}
            </Link>
            {
                resource.meta &&
                <Partials.Meta
                    meta={resource.meta}
                    name='Meta'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='meta'
                />
            }
            {
                resource.implicitRules &&
                <Partials.Uri
                    uri={resource.implicitRules}
                    name='Implicit Rules'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='implicit-rules'
                />
            }
            {
                resource.language &&
                <Partials.Code code={resource.language} name='Language'/>
            }
            {
                resource.text &&
                <Partials.Narrative
                    narrative={resource.text}
                    name='Text'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='text'
                />
            }
            {
                resource.extension &&
                <Partials.Extension
                    extension={resource.extension}
                    name='Extension'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='extension'
                />
            }
            {
                resource.modifierExtension &&
                <Partials.Extension
                    extension={resource.modifierExtension}
                    name='Modifier Extension'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='modifier-extension'
                />
            }
            {
                resource.identifier &&
                <Partials.Identifier
                    identifier={resource.identifier}
                    name='Identifier'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='identifier'
                />
            }
            {
                resource.basedOn &&
                <Partials.Reference
                    reference={resource.basedOn}
                    name='Based On'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='based-on'
                />
            }
            {
                resource.partOf &&
                <Partials.Reference
                    reference={resource.partOf}
                    name='Part Of'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='part-of'
                />
            }
            {
                resource.questionnaire &&
                <Partials.Canonical
                    canonical={resource.questionnaire}
                    name='Questionnaire'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='questionnaire'
                />
            }
            {
                resource.status &&
                <Partials.Code code={resource.status} name='Status'/>
            }
            {
                resource.subject &&
                <Partials.Reference
                    reference={resource.subject}
                    name='Subject'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='subject'
                />
            }
            {
                resource.encounter &&
                <Partials.Reference
                    reference={resource.encounter}
                    name='Encounter'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='encounter'
                />
            }
            {
                resource.authored &&
                <Partials.DateTime
                    dateTime={resource.authored}
                    name='Authored'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='authored'
                />
            }
            {
                resource.author &&
                <Partials.Reference
                    reference={resource.author}
                    name='Author'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='author'
                />
            }
            {
                resource.source &&
                <Partials.Reference
                    reference={resource.source}
                    name='Source'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='source'
                />
            }
            {
                resource.item &&
                <Partials.QuestionnaireResponseItem
                    questionnaireResponseItem={resource.item}
                    name='Item'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='item'
                />
            }
        </>
    );
};

export default QuestionnaireResponse;
