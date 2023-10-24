/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

/**
MedicinalProductIngredient
    An ingredient of a manufactured item or pharmaceutical product.
    If the element is present, it must have either a @value, an @id, or extensions
*/

import React from 'react';
import {Link} from '@mui/material';

// Import all the partial resource
import Partials from '../../partials';

const MedicinalProductIngredient = ({ resource }) => {
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
                resource.role &&
                <Partials.CodeableConcept
                    codeableConcept={resource.role}
                    name='Role'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='role'
                />
            }
            {
                resource.allergenicIndicator &&
                <Partials.Boolean
                    boolean={resource.allergenicIndicator}
                    name='Allergenic Indicator'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='allergenic-indicator'
                />
            }
            {
                resource.manufacturer &&
                <Partials.Reference
                    reference={resource.manufacturer}
                    name='Manufacturer'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='manufacturer'
                />
            }
        </>
    );
};

export default MedicinalProductIngredient;