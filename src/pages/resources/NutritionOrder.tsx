// This file is auto-generated by generate_components so do not edit manually

/**
NutritionOrder
    A request to supply a diet, formula feeding (enteral) or oral nutritional
    supplement to a patient/resident.
    If the element is present, it must have either a @value, an @id, or extensions
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { TNutritionOrder } from '../../types/resources/NutritionOrder';

// Import all the partial resource
import Partials from '../../partials';
import { IdentifierSystem } from '../../utils/identifierSystem';

const NutritionOrder = ({ resource }: { resource: TNutritionOrder }): React.ReactElement => {
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
                resource.instantiatesCanonical &&
                <Partials.Canonical
                    canonical={resource.instantiatesCanonical}
                    name='Instantiates Canonical'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='instantiates-canonical'
                />
            }
            {
                resource.instantiatesUri &&
                <Partials.Uri
                    uri={resource.instantiatesUri}
                    name='Instantiates Uri'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='instantiates-uri'
                />
            }
            {
                resource.instantiates &&
                <Partials.Uri
                    uri={resource.instantiates}
                    name='Instantiates'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='instantiates'
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
                resource.patient &&
                <Partials.Reference
                    reference={resource.patient}
                    name='Patient'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='patient'
                />
            }
            {
                resource.encounter &&
                <Partials.Reference
                    reference={resource.encounter}
                    name='Encounter'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='encounter'
                />
            }
            {
                resource.dateTime &&
                <Partials.DateTime
                    dateTime={resource.dateTime}
                    name='Date Time'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='date-time'
                />
            }
            {
                resource.orderer &&
                <Partials.Reference
                    reference={resource.orderer}
                    name='Orderer'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='orderer'
                />
            }
            {
                resource.allergyIntolerance &&
                <Partials.Reference
                    reference={resource.allergyIntolerance}
                    name='Allergy Intolerance'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='allergy-intolerance'
                />
            }
            {
                resource.foodPreferenceModifier &&
                <Partials.CodeableConcept
                    codeableConcept={resource.foodPreferenceModifier}
                    name='Food Preference Modifier'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='food-preference-modifier'
                />
            }
            {
                resource.excludeFoodModifier &&
                <Partials.CodeableConcept
                    codeableConcept={resource.excludeFoodModifier}
                    name='Exclude Food Modifier'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='exclude-food-modifier'
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
        </>
    );
};

export default NutritionOrder;
