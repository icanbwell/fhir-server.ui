// This file is auto-generated by generate_components so do not edit manually

/**
Slot
    A slot of time on a schedule that may be available for booking appointments.
    If the element is present, it must have either a @value, an @id, or extensions
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { TSlot } from '../../types/resources/Slot';

// Import all the partial resource
import Partials from '../../partials';
import { IdentifierSystem } from '../../utils/identifierSystem';

const Slot = ({ resource }: { resource: TSlot }): React.ReactElement => {
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
                resource.serviceCategory &&
                <Partials.CodeableConcept
                    codeableConcept={resource.serviceCategory}
                    name='Service Category'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='service-category'
                />
            }
            {
                resource.serviceType &&
                <Partials.CodeableConcept
                    codeableConcept={resource.serviceType}
                    name='Service Type'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='service-type'
                />
            }
            {
                resource.specialty &&
                <Partials.CodeableConcept
                    codeableConcept={resource.specialty}
                    name='Specialty'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='specialty'
                />
            }
            {
                resource.appointmentType &&
                <Partials.CodeableConcept
                    codeableConcept={resource.appointmentType}
                    name='Appointment Type'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='appointment-type'
                />
            }
            {
                resource.schedule &&
                <Partials.Reference
                    reference={resource.schedule}
                    name='Schedule'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='schedule'
                />
            }
            {
                resource.status &&
                <Partials.Code code={resource.status} name='Status'/>
            }
            {
                resource.start &&
                <Partials.Instant
                    instant={resource.start}
                    name='Start'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='start'
                />
            }
            {
                resource.end &&
                <Partials.Instant
                    instant={resource.end}
                    name='End'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='end'
                />
            }
            {
                resource.overbooked &&
                <Partials.Boolean
                    boolean={resource.overbooked}
                    name='Overbooked'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='overbooked'
                />
            }
        </>
    );
};

export default Slot;
