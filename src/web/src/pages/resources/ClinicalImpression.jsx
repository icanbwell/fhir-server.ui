/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

/**
ClinicalImpression
    A record of a clinical assessment performed to determine what problem(s) may
    affect the patient and before planning the treatments or management strategies
    that are best to manage a patient's condition. Assessments are often 1:1 with
    a clinical consultation / encounter,  but this varies greatly depending on the
    clinical workflow. This resource is called "ClinicalImpression" rather than
    "ClinicalAssessment" to avoid confusion with the recording of assessment tools
    such as Apgar score.
    If the element is present, it must have either a @value, an @id, or extensions
*/

import React from 'react';
import {Link} from '@mui/material';

// Import all the partial resource
import Partials from '../../partials';

const ClinicalImpression = ({ resource }) => {
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
                resource.status&&
                <Partials.Code code={resource.status} name='Status'/>
            }
            {
                resource.statusReason &&
                <Partials.CodeableConcept
                    codeableConcept={resource.statusReason}
                    name='Status Reason'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='status-reason'
                />
            }
            {
                resource.code &&
                <Partials.CodeableConcept
                    codeableConcept={resource.code}
                    name='Code'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='code'
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
                resource.effectiveDateTime &&
                <Partials.DateTime
                    dateTime={resource.effectiveDateTime}
                    name='Effective Date Time'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='effective-date-time'
                />
            }
            {
                resource.effectivePeriod &&
                <Partials.Period
                    period={resource.effectivePeriod}
                    name='Effective Period'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='effective-period'
                />
            }
            {
                resource.date &&
                <Partials.DateTime
                    dateTime={resource.date}
                    name='Date'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='date'
                />
            }
            {
                resource.assessor &&
                <Partials.Reference
                    reference={resource.assessor}
                    name='Assessor'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='assessor'
                />
            }
            {
                resource.previous &&
                <Partials.Reference
                    reference={resource.previous}
                    name='Previous'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='previous'
                />
            }
            {
                resource.problem &&
                <Partials.Reference
                    reference={resource.problem}
                    name='Problem'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='problem'
                />
            }
            {
                resource.protocol &&
                <Partials.Uri
                    uri={resource.protocol}
                    name='Protocol'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='protocol'
                />
            }
            {
                resource.prognosisCodeableConcept &&
                <Partials.CodeableConcept
                    codeableConcept={resource.prognosisCodeableConcept}
                    name='Prognosis Codeable Concept'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='prognosis-codeable-concept'
                />
            }
            {
                resource.prognosisReference &&
                <Partials.Reference
                    reference={resource.prognosisReference}
                    name='Prognosis Reference'
                    resourceType={resource.resourceType}
                    id={resource.id}
                    searchParameter='prognosis-reference'
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
        </>
    );
};

export default ClinicalImpression;