/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

/**
DeviceRequest
    Represents a request for a patient to employ a medical device. The device may
    be an implantable device, or an external assistive device, such as a walker.
    If the element is present, it must have either a @value, an @id, or extensions
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { TDeviceRequest } from '../../types/resources/DeviceRequest';

// Import all the partial resource
import Partials from '../../partials';

const DeviceRequest = ({ resource }: { resource: TDeviceRequest }): React.ReactElement => {
    return (
        <>
            <Link title="Direct link to Resource" to={`/4_0_0/${resource.resourceType}/${resource.id}`}>
                {resource.resourceType}/{resource.id}
            </Link>
            {
                resource.meta &&
                <Partials.Meta
                    meta={resource.meta}
                    name='Meta'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='meta'
                />
            }
            {
                resource.implicitRules &&
                <Partials.Uri
                    uri={resource.implicitRules}
                    name='Implicit Rules'
                    resourceType={resource.resourceType}
                    id={resource.id}
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
                    id={resource.id}
                    searchParameter='text'
                />
            }
            {
                resource.extension &&
                <Partials.Extension
                    extension={resource.extension}
                    name='Extension'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='extension'
                />
            }
            {
                resource.modifierExtension &&
                <Partials.Extension
                    extension={resource.modifierExtension}
                    name='Modifier Extension'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='modifier-extension'
                />
            }
            {
                resource.identifier &&
                <Partials.Identifier
                    identifier={resource.identifier}
                    name='Identifier'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='identifier'
                />
            }
            {
                resource.instantiatesCanonical &&
                <Partials.Canonical
                    canonical={resource.instantiatesCanonical}
                    name='Instantiates Canonical'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='instantiates-canonical'
                />
            }
            {
                resource.instantiatesUri &&
                <Partials.Uri
                    uri={resource.instantiatesUri}
                    name='Instantiates Uri'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='instantiates-uri'
                />
            }
            {
                resource.basedOn &&
                <Partials.Reference
                    reference={resource.basedOn}
                    name='Based On'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='based-on'
                />
            }
            {
                resource.priorRequest &&
                <Partials.Reference
                    reference={resource.priorRequest}
                    name='Prior Request'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='prior-request'
                />
            }
            {
                resource.groupIdentifier &&
                <Partials.Identifier
                    identifier={resource.groupIdentifier}
                    name='Group Identifier'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='group-identifier'
                />
            }
            {
                resource.status &&
                <Partials.Code code={resource.status} name='Status'/>
            }
            {
                resource.intent &&
                <Partials.Code code={resource.intent} name='Intent'/>
            }
            {
                resource.priority &&
                <Partials.Code code={resource.priority} name='Priority'/>
            }
            {
                resource.codeReference &&
                <Partials.Reference
                    reference={resource.codeReference}
                    name='Code Reference'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='code-reference'
                />
            }
            {
                resource.codeCodeableConcept &&
                <Partials.CodeableConcept
                    codeableConcept={resource.codeCodeableConcept}
                    name='Code Codeable Concept'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='code-codeable-concept'
                />
            }
            {
                resource.subject &&
                <Partials.Reference
                    reference={resource.subject}
                    name='Subject'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='subject'
                />
            }
            {
                resource.encounter &&
                <Partials.Reference
                    reference={resource.encounter}
                    name='Encounter'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='encounter'
                />
            }
            {
                resource.occurrenceDateTime &&
                <Partials.DateTime
                    dateTime={resource.occurrenceDateTime}
                    name='Occurrence Date Time'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='occurrence-date-time'
                />
            }
            {
                resource.occurrencePeriod &&
                <Partials.Period
                    period={resource.occurrencePeriod}
                    name='Occurrence Period'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='occurrence-period'
                />
            }
            {
                resource.occurrenceTiming &&
                <Partials.Timing
                    timing={resource.occurrenceTiming}
                    name='Occurrence Timing'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='occurrence-timing'
                />
            }
            {
                resource.authoredOn &&
                <Partials.DateTime
                    dateTime={resource.authoredOn}
                    name='Authored On'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='authored-on'
                />
            }
            {
                resource.requester &&
                <Partials.Reference
                    reference={resource.requester}
                    name='Requester'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='requester'
                />
            }
            {
                resource.performerType &&
                <Partials.CodeableConcept
                    codeableConcept={resource.performerType}
                    name='Performer Type'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='performer-type'
                />
            }
            {
                resource.performer &&
                <Partials.Reference
                    reference={resource.performer}
                    name='Performer'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='performer'
                />
            }
            {
                resource.reasonCode &&
                <Partials.CodeableConcept
                    codeableConcept={resource.reasonCode}
                    name='Reason Code'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='reason-code'
                />
            }
            {
                resource.reasonReference &&
                <Partials.Reference
                    reference={resource.reasonReference}
                    name='Reason Reference'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='reason-reference'
                />
            }
            {
                resource.insurance &&
                <Partials.Reference
                    reference={resource.insurance}
                    name='Insurance'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='insurance'
                />
            }
            {
                resource.supportingInfo &&
                <Partials.Reference
                    reference={resource.supportingInfo}
                    name='Supporting Info'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='supporting-info'
                />
            }
            {
                resource.note &&
                <Partials.Annotation
                    annotation={resource.note}
                    name='Note'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='note'
                />
            }
            {
                resource.relevantHistory &&
                <Partials.Reference
                    reference={resource.relevantHistory}
                    name='Relevant History'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='relevant-history'
                />
            }
        </>
    );
};

export default DeviceRequest;