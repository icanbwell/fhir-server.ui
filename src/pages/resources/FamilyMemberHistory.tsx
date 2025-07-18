// This file is auto-generated by generate_components so do not edit manually

/**
FamilyMemberHistory
    Significant health conditions for a person related to the patient relevant in
    the context of care for the patient.
    If the element is present, it must have either a @value, an @id, or extensions
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { TFamilyMemberHistory } from '../../types/resources/FamilyMemberHistory';

// Import all the partial resource
import Partials from '../../partials';
import { IdentifierSystem } from '../../utils/identifierSystem';

const FamilyMemberHistory = ({ resource }: { resource: TFamilyMemberHistory }): React.ReactElement => {
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
                resource.status &&
                <Partials.Code code={resource.status} name='Status'/>
            }
            {
                resource.dataAbsentReason &&
                <Partials.CodeableConcept
                    codeableConcept={resource.dataAbsentReason}
                    name='Data Absent Reason'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='data-absent-reason'
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
                resource.date &&
                <Partials.DateTime
                    dateTime={resource.date}
                    name='Date'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='date'
                />
            }
            {
                resource.relationship &&
                <Partials.CodeableConcept
                    codeableConcept={resource.relationship}
                    name='Relationship'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='relationship'
                />
            }
            {
                resource.sex &&
                <Partials.CodeableConcept
                    codeableConcept={resource.sex}
                    name='Sex'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='sex'
                />
            }
            {
                resource.bornPeriod &&
                <Partials.Period
                    period={resource.bornPeriod}
                    name='Born Period'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='born-period'
                />
            }
            {
                resource.ageAge &&
                <Partials.Quantity
                    quantity={resource.ageAge}
                    name='Age Age'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='age-age'
                />
            }
            {
                resource.estimatedAge &&
                <Partials.Boolean
                    boolean={resource.estimatedAge}
                    name='Estimated Age'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='estimated-age'
                />
            }
            {
                resource.deceasedBoolean &&
                <Partials.Boolean
                    boolean={resource.deceasedBoolean}
                    name='Deceased Boolean'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='deceased-boolean'
                />
            }
            {
                resource.deceasedAge &&
                <Partials.Quantity
                    quantity={resource.deceasedAge}
                    name='Deceased Age'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='deceased-age'
                />
            }
            {
                resource.reasonCode &&
                <Partials.CodeableConcept
                    codeableConcept={resource.reasonCode}
                    name='Reason Code'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='reason-code'
                />
            }
            {
                resource.reasonReference &&
                <Partials.Reference
                    reference={resource.reasonReference}
                    name='Reason Reference'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='reason-reference'
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

export default FamilyMemberHistory;
