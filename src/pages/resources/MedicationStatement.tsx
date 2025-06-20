// This file is auto-generated by generate_components so do not edit manually

/**
MedicationStatement
    A record of a medication that is being consumed by a patient.   A
    MedicationStatement may indicate that the patient may be taking the medication
    now or has taken the medication in the past or will be taking the medication
    in the future.  The source of this information can be the patient, significant
    other (such as a family member or spouse), or a clinician.  A common scenario
    where this information is captured is during the history taking process during
    a patient visit or stay.   The medication information may come from sources
    such as the patient's memory, from a prescription bottle,  or from a list of
    medications the patient, clinician or other party maintains.

    The primary difference between a medication statement and a medication
    administration is that the medication administration has complete
    administration information and is based on actual administration information
    from the person who administered the medication.  A medication statement is
    often, if not always, less specific.  There is no required date/time when the
    medication was administered, in fact we only know that a source has reported
    the patient is taking this medication, where details such as time, quantity,
    or rate or even medication product may be incomplete or missing or less
    precise.  As stated earlier, the medication statement information may come
    from the patient's memory, from a prescription bottle or from a list of
    medications the patient, clinician or other party maintains.  Medication
    administration is more formal and is not missing detailed information.
    If the element is present, it must have either a @value, an @id, or extensions
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { TMedicationStatement } from '../../types/resources/MedicationStatement';

// Import all the partial resource
import Partials from '../../partials';
import { IdentifierSystem } from '../../utils/identifierSystem';

const MedicationStatement = ({ resource }: { resource: TMedicationStatement }): React.ReactElement => {
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
                resource.basedOn &&
                <Partials.Reference
                    reference={resource.basedOn}
                    name='Based On'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='based-on'
                />
            }
            {
                resource.partOf &&
                <Partials.Reference
                    reference={resource.partOf}
                    name='Part Of'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='part-of'
                />
            }
            {
                resource.status &&
                <Partials.Code code={resource.status} name='Status'/>
            }
            {
                resource.statusReason &&
                <Partials.CodeableConcept
                    codeableConcept={resource.statusReason}
                    name='Status Reason'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='status-reason'
                />
            }
            {
                resource.category &&
                <Partials.CodeableConcept
                    codeableConcept={resource.category}
                    name='Category'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='category'
                />
            }
            {
                resource.medicationCodeableConcept &&
                <Partials.CodeableConcept
                    codeableConcept={resource.medicationCodeableConcept}
                    name='Medication Codeable Concept'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='medication-codeable-concept'
                />
            }
            {
                resource.medicationReference &&
                <Partials.Reference
                    reference={resource.medicationReference}
                    name='Medication Reference'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='medication-reference'
                />
            }
            {
                resource.subject &&
                <Partials.Reference
                    reference={resource.subject}
                    name='Subject'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='subject'
                />
            }
            {
                resource.context &&
                <Partials.Reference
                    reference={resource.context}
                    name='Context'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='context'
                />
            }
            {
                resource.effectiveDateTime &&
                <Partials.DateTime
                    dateTime={resource.effectiveDateTime}
                    name='Effective Date Time'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='effective-date-time'
                />
            }
            {
                resource.effectivePeriod &&
                <Partials.Period
                    period={resource.effectivePeriod}
                    name='Effective Period'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='effective-period'
                />
            }
            {
                resource.dateAsserted &&
                <Partials.DateTime
                    dateTime={resource.dateAsserted}
                    name='Date Asserted'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='date-asserted'
                />
            }
            {
                resource.informationSource &&
                <Partials.Reference
                    reference={resource.informationSource}
                    name='Information Source'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='information-source'
                />
            }
            {
                resource.derivedFrom &&
                <Partials.Reference
                    reference={resource.derivedFrom}
                    name='Derived From'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='derived-from'
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
            {
                resource.dosage &&
                <Partials.Dosage
                    dosage={resource.dosage}
                    name='Dosage'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='dosage'
                />
            }
        </>
    );
};

export default MedicationStatement;
