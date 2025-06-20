// This file is auto-generated by generate_components so do not edit manually

/**
BodyStructure
    Record details about an anatomical structure.  This resource may be used when
    a coded concept does not provide the necessary detail needed for the use case.
    If the element is present, it must have either a @value, an @id, or extensions
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { TBodyStructure } from '../../types/resources/BodyStructure';

// Import all the partial resource
import Partials from '../../partials';
import { IdentifierSystem } from '../../utils/identifierSystem';

const BodyStructure = ({ resource }: { resource: TBodyStructure }): React.ReactElement => {
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
                resource.active &&
                <Partials.Boolean
                    boolean={resource.active}
                    name='Active'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='active'
                />
            }
            {
                resource.morphology &&
                <Partials.CodeableConcept
                    codeableConcept={resource.morphology}
                    name='Morphology'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='morphology'
                />
            }
            {
                resource.location &&
                <Partials.CodeableConcept
                    codeableConcept={resource.location}
                    name='Location'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='location'
                />
            }
            {
                resource.locationQualifier &&
                <Partials.CodeableConcept
                    codeableConcept={resource.locationQualifier}
                    name='Location Qualifier'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='location-qualifier'
                />
            }
            {
                resource.image &&
                <Partials.Attachment
                    attachment={resource.image}
                    name='Image'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='image'
                />
            }
            {
                resource.patient &&
                <Partials.Reference
                    reference={resource.patient}
                    name='Patient'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='patient'
                />
            }
        </>
    );
};

export default BodyStructure;
