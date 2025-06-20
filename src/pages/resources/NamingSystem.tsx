// This file is auto-generated by generate_components so do not edit manually

/**
NamingSystem
    A curated namespace that issues unique symbols within that namespace for the
    identification of concepts, people, devices, etc.  Represents a "System" used
    within the Identifier and Coding data types.
    If the element is present, it must have either a @value, an @id, or extensions
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { TNamingSystem } from '../../types/resources/NamingSystem';

// Import all the partial resource
import Partials from '../../partials';
import { IdentifierSystem } from '../../utils/identifierSystem';

const NamingSystem = ({ resource }: { resource: TNamingSystem }): React.ReactElement => {
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
                resource.status &&
                <Partials.Code code={resource.status} name='Status'/>
            }
            {
                resource.kind &&
                <Partials.Code code={resource.kind} name='Kind'/>
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
                resource.type &&
                <Partials.CodeableConcept
                    codeableConcept={resource.type}
                    name='Type'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='type'
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
        </>
    );
};

export default NamingSystem;
