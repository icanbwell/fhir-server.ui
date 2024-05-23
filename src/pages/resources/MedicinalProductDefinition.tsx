/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_components so do not edit manually

/**
MedicinalProductDefinition
    A medicinal product, being a substance or combination of substances that is
    intended to treat, prevent or diagnose a disease, or to restore, correct or
    modify physiological functions by exerting a pharmacological, immunological or
    metabolic action. This resource is intended to define and detail such products
    and their properties, for uses other than direct patient care (e.g. regulatory
    use, or drug catalogs).
    If the element is present, it must have either a @value, an @id, or extensions
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { TMedicinalProductDefinition } from '../../types/resources/MedicinalProductDefinition';

// Import all the partial resource
import Partials from '../../partials';
import { SecurityTagSystem } from '../../utils/securityTagSystem';
import { generateUuidV5, isUuid } from '../../utils/uid.util';

const MedicinalProductDefinition = ({ resource }: { resource: TMedicinalProductDefinition }): React.ReactElement => {
    const sourceAssigningAuthority = resource?.meta?.security?.find(
        s => s.system === SecurityTagSystem.sourceAssigningAuthority
    )?.code;
    const uuid = resource.id && isUuid(`${resource.id}`) ?
        resource.id : generateUuidV5(`${resource.id}|${sourceAssigningAuthority}`);

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
                resource.domain &&
                <Partials.CodeableConcept
                    codeableConcept={resource.domain}
                    name='Domain'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='domain'
                />
            }
            {
                resource.status &&
                <Partials.CodeableConcept
                    codeableConcept={resource.status}
                    name='Status'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='status'
                />
            }
            {
                resource.statusDate &&
                <Partials.DateTime
                    dateTime={resource.statusDate}
                    name='Status Date'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='status-date'
                />
            }
            {
                resource.description &&
                <Partials.Markdown
                    markdown={resource.description}
                    name='Description'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='description'
                />
            }
            {
                resource.combinedPharmaceuticalDoseForm &&
                <Partials.CodeableConcept
                    codeableConcept={resource.combinedPharmaceuticalDoseForm}
                    name='Combined Pharmaceutical Dose Form'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='combined-pharmaceutical-dose-form'
                />
            }
            {
                resource.route &&
                <Partials.CodeableConcept
                    codeableConcept={resource.route}
                    name='Route'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='route'
                />
            }
            {
                resource.indication &&
                <Partials.Markdown
                    markdown={resource.indication}
                    name='Indication'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='indication'
                />
            }
            {
                resource.legalStatusOfSupply &&
                <Partials.CodeableConcept
                    codeableConcept={resource.legalStatusOfSupply}
                    name='Legal Status Of Supply'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='legal-status-of-supply'
                />
            }
            {
                resource.additionalMonitoringIndicator &&
                <Partials.CodeableConcept
                    codeableConcept={resource.additionalMonitoringIndicator}
                    name='Additional Monitoring Indicator'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='additional-monitoring-indicator'
                />
            }
            {
                resource.specialMeasures &&
                <Partials.CodeableConcept
                    codeableConcept={resource.specialMeasures}
                    name='Special Measures'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='special-measures'
                />
            }
            {
                resource.pediatricUseIndicator &&
                <Partials.CodeableConcept
                    codeableConcept={resource.pediatricUseIndicator}
                    name='Pediatric Use Indicator'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='pediatric-use-indicator'
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
                resource.packagedMedicinalProduct &&
                <Partials.CodeableConcept
                    codeableConcept={resource.packagedMedicinalProduct}
                    name='Packaged Medicinal Product'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='packaged-medicinal-product'
                />
            }
            {
                resource.ingredient &&
                <Partials.CodeableConcept
                    codeableConcept={resource.ingredient}
                    name='Ingredient'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='ingredient'
                />
            }
            {
                resource.attachedDocument &&
                <Partials.Reference
                    reference={resource.attachedDocument}
                    name='Attached Document'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='attached-document'
                />
            }
            {
                resource.masterFile &&
                <Partials.Reference
                    reference={resource.masterFile}
                    name='Master File'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='master-file'
                />
            }
            {
                resource.clinicalTrial &&
                <Partials.Reference
                    reference={resource.clinicalTrial}
                    name='Clinical Trial'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='clinical-trial'
                />
            }
            {
                resource.code &&
                <Partials.Coding
                    coding={resource.code}
                    name='Code'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='code'
                />
            }
        </>
    );
};

export default MedicinalProductDefinition;