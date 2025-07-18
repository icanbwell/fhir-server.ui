// This file is auto-generated by generate_components so do not edit manually

/**
DeviceDefinition
    The characteristics, operational status and capabilities of a medical-related
    component of a medical device.
    If the element is present, it must have either a @value, an @id, or extensions
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { TDeviceDefinition } from '../../types/resources/DeviceDefinition';

// Import all the partial resource
import Partials from '../../partials';
import { IdentifierSystem } from '../../utils/identifierSystem';

const DeviceDefinition = ({ resource }: { resource: TDeviceDefinition }): React.ReactElement => {
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
                resource.manufacturerReference &&
                <Partials.Reference
                    reference={resource.manufacturerReference}
                    name='Manufacturer Reference'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='manufacturer-reference'
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
                resource.safety &&
                <Partials.CodeableConcept
                    codeableConcept={resource.safety}
                    name='Safety'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='safety'
                />
            }
            {
                resource.languageCode &&
                <Partials.CodeableConcept
                    codeableConcept={resource.languageCode}
                    name='Language Code'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='language-code'
                />
            }
            {
                resource.owner &&
                <Partials.Reference
                    reference={resource.owner}
                    name='Owner'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='owner'
                />
            }
            {
                resource.contact &&
                <Partials.ContactPoint
                    contactPoint={resource.contact}
                    name='Contact'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='contact'
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
                resource.onlineInformation &&
                <Partials.Uri
                    uri={resource.onlineInformation}
                    name='Online Information'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='online-information'
                />
            }
            {
                resource.note &&
                <Partials.Annotation
                    annotation={resource.note}
                    name='Note'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='note'
                />
            }
            {
                resource.quantity &&
                <Partials.Quantity
                    quantity={resource.quantity}
                    name='Quantity'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='quantity'
                />
            }
            {
                resource.parentDevice &&
                <Partials.Reference
                    reference={resource.parentDevice}
                    name='Parent Device'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='parent-device'
                />
            }
        </>
    );
};

export default DeviceDefinition;
