// This file is auto-generated by generate_components so do not edit manually

/**
AllergyIntolerance
    Risk of harmful or undesirable, physiological response which is unique to an
    individual and associated with exposure to a substance.
    If the element is present, it must have either a @value, an @id, or extensions
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { TAllergyIntolerance } from '../../types/resources/AllergyIntolerance';

// Import all the partial resource
import Partials from '../../partials';
import { IdentifierSystem } from '../../utils/identifierSystem';

const AllergyIntolerance = ({ resource }: { resource: TAllergyIntolerance }): React.ReactElement => {
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
                resource.clinicalStatus &&
                <Partials.CodeableConcept
                    codeableConcept={resource.clinicalStatus}
                    name='Clinical Status'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='clinical-status'
                />
            }
            {
                resource.verificationStatus &&
                <Partials.CodeableConcept
                    codeableConcept={resource.verificationStatus}
                    name='Verification Status'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='verification-status'
                />
            }
            {
                resource.type &&
                <Partials.Code code={resource.type} name='Type'/>
            }
            {
                resource.category &&
                <Partials.Code code={resource.category} name='Category'/>
            }
            {
                resource.criticality &&
                <Partials.Code code={resource.criticality} name='Criticality'/>
            }
            {
                resource.code &&
                <Partials.CodeableConcept
                    codeableConcept={resource.code}
                    name='Code'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='code'
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
                resource.onsetDateTime &&
                <Partials.DateTime
                    dateTime={resource.onsetDateTime}
                    name='Onset Date Time'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='onset-date-time'
                />
            }
            {
                resource.onsetAge &&
                <Partials.Quantity
                    quantity={resource.onsetAge}
                    name='Onset Age'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='onset-age'
                />
            }
            {
                resource.onsetPeriod &&
                <Partials.Period
                    period={resource.onsetPeriod}
                    name='Onset Period'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='onset-period'
                />
            }
            {
                resource.recordedDate &&
                <Partials.DateTime
                    dateTime={resource.recordedDate}
                    name='Recorded Date'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='recorded-date'
                />
            }
            {
                resource.recorder &&
                <Partials.Reference
                    reference={resource.recorder}
                    name='Recorder'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='recorder'
                />
            }
            {
                resource.asserter &&
                <Partials.Reference
                    reference={resource.asserter}
                    name='Asserter'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='asserter'
                />
            }
            {
                resource.lastOccurrence &&
                <Partials.DateTime
                    dateTime={resource.lastOccurrence}
                    name='Last Occurrence'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='last-occurrence'
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

export default AllergyIntolerance;
