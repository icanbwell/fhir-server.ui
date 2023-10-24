/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

/**
Specimen
    A sample to be used for analysis.
    If the element is present, it must have either a @value, an @id, or extensions
*/

import React from 'react';
import {Link} from '@mui/material';

// Import all the partial resource
import Partials from '../../partials';

const Specimen = ({ resource }) => {
    return (
        <>
            <Link title="Direct link to Resource" href={`/4_0_0/${resource.resourceType}/${resource.id}`}>
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
                resource.language&&
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
                resource.accessionIdentifier &&
                <Partials.Identifier
                    identifier={resource.accessionIdentifier}
                    name='Accession Identifier'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='accession-identifier'
                />
            }
            {
                resource.status&&
                <Partials.Code code={resource.status} name='Status'/>
            }
            {
                resource.type &&
                <Partials.CodeableConcept
                    codeableConcept={resource.type}
                    name='Type'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='type'
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
                resource.receivedTime &&
                <Partials.DateTime
                    dateTime={resource.receivedTime}
                    name='Received Time'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='received-time'
                />
            }
            {
                resource.parent &&
                <Partials.Reference
                    reference={resource.parent}
                    name='Parent'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='parent'
                />
            }
            {
                resource.request &&
                <Partials.Reference
                    reference={resource.request}
                    name='Request'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='request'
                />
            }
            {
                resource.condition &&
                <Partials.CodeableConcept
                    codeableConcept={resource.condition}
                    name='Condition'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='condition'
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
        </>
    );
};

export default Specimen;