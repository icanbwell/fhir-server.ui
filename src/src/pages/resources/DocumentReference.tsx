/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

/**
DocumentReference
    A reference to a document of any kind for any purpose. Provides metadata about
    the document so that the document can be discovered and managed. The scope of
    a document is any seralized object with a mime-type, so includes formal
    patient centric documents (CDA), cliical notes, scanned paper, and non-patient
    specific documents like policy text.
    If the element is present, it must have either a @value, an @id, or extensions
*/

import React from 'react';
import { Link } from '@mui/material';
import { TDocumentReference } from '../../types/resources/DocumentReference';

// Import all the partial resource
import Partials from '../../partials';

const DocumentReference = ({ resource }: { resource: TDocumentReference }): React.ReactElement => {
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
                resource.masterIdentifier &&
                <Partials.Identifier
                    identifier={resource.masterIdentifier}
                    name='Master Identifier'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='master-identifier'
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
                resource.status &&
                <Partials.Code code={resource.status} name='Status'/>
            }
            {
                resource.docStatus &&
                <Partials.Code code={resource.docStatus} name='Doc Status'/>
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
                resource.category &&
                <Partials.CodeableConcept
                    codeableConcept={resource.category}
                    name='Category'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='category'
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
                resource.date &&
                <Partials.Instant
                    instant={resource.date}
                    name='Date'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='date'
                />
            }
            {
                resource.author &&
                <Partials.Reference
                    reference={resource.author}
                    name='Author'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='author'
                />
            }
            {
                resource.authenticator &&
                <Partials.Reference
                    reference={resource.authenticator}
                    name='Authenticator'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='authenticator'
                />
            }
            {
                resource.custodian &&
                <Partials.Reference
                    reference={resource.custodian}
                    name='Custodian'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='custodian'
                />
            }
            {
                resource.securityLabel &&
                <Partials.CodeableConcept
                    codeableConcept={resource.securityLabel}
                    name='Security Label'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='security-label'
                />
            }
        </>
    );
};

export default DocumentReference;