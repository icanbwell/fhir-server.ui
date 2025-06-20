// This file is auto-generated by generate_components so do not edit manually

/**
CatalogEntry
    Catalog entries are wrappers that contextualize items included in a catalog.
    If the element is present, it must have either a @value, an @id, or extensions
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { TCatalogEntry } from '../../types/resources/CatalogEntry';

// Import all the partial resource
import Partials from '../../partials';
import { IdentifierSystem } from '../../utils/identifierSystem';

const CatalogEntry = ({ resource }: { resource: TCatalogEntry }): React.ReactElement => {
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
                resource.orderable &&
                <Partials.Boolean
                    boolean={resource.orderable}
                    name='Orderable'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='orderable'
                />
            }
            {
                resource.referencedItem &&
                <Partials.Reference
                    reference={resource.referencedItem}
                    name='Referenced Item'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='referenced-item'
                />
            }
            {
                resource.additionalIdentifier &&
                <Partials.Identifier
                    identifier={resource.additionalIdentifier}
                    name='Additional Identifier'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='additional-identifier'
                />
            }
            {
                resource.classification &&
                <Partials.CodeableConcept
                    codeableConcept={resource.classification}
                    name='Classification'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='classification'
                />
            }
            {
                resource.status &&
                <Partials.Code code={resource.status} name='Status'/>
            }
            {
                resource.validityPeriod &&
                <Partials.Period
                    period={resource.validityPeriod}
                    name='Validity Period'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='validity-period'
                />
            }
            {
                resource.validTo &&
                <Partials.DateTime
                    dateTime={resource.validTo}
                    name='Valid To'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='valid-to'
                />
            }
            {
                resource.lastUpdated &&
                <Partials.DateTime
                    dateTime={resource.lastUpdated}
                    name='Last Updated'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='last-updated'
                />
            }
            {
                resource.additionalCharacteristic &&
                <Partials.CodeableConcept
                    codeableConcept={resource.additionalCharacteristic}
                    name='Additional Characteristic'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='additional-characteristic'
                />
            }
            {
                resource.additionalClassification &&
                <Partials.CodeableConcept
                    codeableConcept={resource.additionalClassification}
                    name='Additional Classification'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='additional-classification'
                />
            }
            {
                resource.relatedEntry &&
                <Partials.Reference
                    reference={resource.relatedEntry}
                    name='Related Entry'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='related-entry'
                    field='item'
                />
            }
        </>
    );
};

export default CatalogEntry;
