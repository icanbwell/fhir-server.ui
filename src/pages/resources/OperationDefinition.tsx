// This file is auto-generated by generate_components so do not edit manually

/**
OperationDefinition
    A formal computable definition of an operation (on the RESTful interface) or a
    named query (using the search interaction).
    If the element is present, it must have either a @value, an @id, or extensions
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { TOperationDefinition } from '../../types/resources/OperationDefinition';

// Import all the partial resource
import Partials from '../../partials';
import { IdentifierSystem } from '../../utils/identifierSystem';

const OperationDefinition = ({ resource }: { resource: TOperationDefinition }): React.ReactElement => {
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
                resource.url &&
                <Partials.Uri
                    uri={resource.url}
                    name='Url'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='url'
                />
            }
            {
                resource.status &&
                <Partials.Code code={resource.status} name='Status'/>
            }
            {
                resource.kind &&
                <Partials.Code code={resource.kind} name='Kind'/>
            }
            {
                resource.experimental &&
                <Partials.Boolean
                    boolean={resource.experimental}
                    name='Experimental'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='experimental'
                />
            }
            {
                resource.date &&
                <Partials.DateTime
                    dateTime={resource.date}
                    name='Date'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='date'
                />
            }
            {
                resource.description &&
                <Partials.Markdown
                    markdown={resource.description}
                    name='Description'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='description'
                />
            }
            {
                resource.jurisdiction &&
                <Partials.CodeableConcept
                    codeableConcept={resource.jurisdiction}
                    name='Jurisdiction'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='jurisdiction'
                />
            }
            {
                resource.purpose &&
                <Partials.Markdown
                    markdown={resource.purpose}
                    name='Purpose'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='purpose'
                />
            }
            {
                resource.affectsState &&
                <Partials.Boolean
                    boolean={resource.affectsState}
                    name='Affects State'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='affects-state'
                />
            }
            {
                resource.code &&
                <Partials.Code code={resource.code} name='Code'/>
            }
            {
                resource.comment &&
                <Partials.Markdown
                    markdown={resource.comment}
                    name='Comment'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='comment'
                />
            }
            {
                resource.base &&
                <Partials.Canonical
                    canonical={resource.base}
                    name='Base'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='base'
                />
            }
            {
                resource.resource &&
                <Partials.Code code={resource.resource} name='Resource'/>
            }
            {
                resource.system &&
                <Partials.Boolean
                    boolean={resource.system}
                    name='System'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='system'
                />
            }
            {
                resource.type &&
                <Partials.Boolean
                    boolean={resource.type}
                    name='Type'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='type'
                />
            }
            {
                resource.instance &&
                <Partials.Boolean
                    boolean={resource.instance}
                    name='Instance'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='instance'
                />
            }
            {
                resource.inputProfile &&
                <Partials.Canonical
                    canonical={resource.inputProfile}
                    name='Input Profile'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='input-profile'
                />
            }
            {
                resource.outputProfile &&
                <Partials.Canonical
                    canonical={resource.outputProfile}
                    name='Output Profile'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='output-profile'
                />
            }
        </>
    );
};

export default OperationDefinition;
