/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

/**
ChargeItem
    The resource ChargeItem describes the provision of healthcare provider
    products for a certain patient, therefore referring not only to the product,
    but containing in addition details of the provision, like date, time, amounts
    and participating organizations and persons. Main Usage of the ChargeItem is
    to enable the billing process and internal cost allocation.
    If the element is present, it must have either a @value, an @id, or extensions
*/

import React from 'react';
import { Link } from '@mui/material';

// Import all the partial resource
import Partials from '../../partials';

const ChargeItem = ({ resource }) => {
  return (
    <>
      <Link
        title="Direct link to Resource"
        href={`/4_0_0/${resource.resourceType}/${resource.id}`}
      >
        {resource.resourceType}/{resource.id}
      </Link>
      {resource.meta && (
        <Partials.Meta
          meta={resource.meta}
          name="Meta"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="meta"
        />
      )}
      {resource.implicitRules && (
        <Partials.Uri
          uri={resource.implicitRules}
          name="Implicit Rules"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="implicit-rules"
        />
      )}
      {resource.language && (
        <Partials.Code code={resource.language} name="Language" />
      )}
      {resource.text && (
        <Partials.Narrative
          narrative={resource.text}
          name="Text"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="text"
        />
      )}
      {resource.extension && (
        <Partials.Extension
          extension={resource.extension}
          name="Extension"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="extension"
        />
      )}
      {resource.modifierExtension && (
        <Partials.Extension
          extension={resource.modifierExtension}
          name="Modifier Extension"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="modifier-extension"
        />
      )}
      {resource.identifier && (
        <Partials.Identifier
          identifier={resource.identifier}
          name="Identifier"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="identifier"
        />
      )}
      {resource.definitionUri && (
        <Partials.Uri
          uri={resource.definitionUri}
          name="Definition Uri"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="definition-uri"
        />
      )}
      {resource.definitionCanonical && (
        <Partials.Canonical
          canonical={resource.definitionCanonical}
          name="Definition Canonical"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="definition-canonical"
        />
      )}
      {resource.status && (
        <Partials.Code code={resource.status} name="Status" />
      )}
      {resource.partOf && (
        <Partials.Reference
          reference={resource.partOf}
          name="Part Of"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="part-of"
        />
      )}
      {resource.code && (
        <Partials.CodeableConcept
          codeableConcept={resource.code}
          name="Code"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="code"
        />
      )}
      {resource.subject && (
        <Partials.Reference
          reference={resource.subject}
          name="Subject"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="subject"
        />
      )}
      {resource.context && (
        <Partials.Reference
          reference={resource.context}
          name="Context"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="context"
        />
      )}
      {resource.occurrenceDateTime && (
        <Partials.DateTime
          dateTime={resource.occurrenceDateTime}
          name="Occurrence Date Time"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="occurrence-date-time"
        />
      )}
      {resource.occurrencePeriod && (
        <Partials.Period
          period={resource.occurrencePeriod}
          name="Occurrence Period"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="occurrence-period"
        />
      )}
      {resource.occurrenceTiming && (
        <Partials.Timing
          timing={resource.occurrenceTiming}
          name="Occurrence Timing"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="occurrence-timing"
        />
      )}
      {resource.performingOrganization && (
        <Partials.Reference
          reference={resource.performingOrganization}
          name="Performing Organization"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="performing-organization"
        />
      )}
      {resource.requestingOrganization && (
        <Partials.Reference
          reference={resource.requestingOrganization}
          name="Requesting Organization"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="requesting-organization"
        />
      )}
      {resource.costCenter && (
        <Partials.Reference
          reference={resource.costCenter}
          name="Cost Center"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="cost-center"
        />
      )}
      {resource.quantity && (
        <Partials.Quantity
          quantity={resource.quantity}
          name="Quantity"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="quantity"
        />
      )}
      {resource.bodysite && (
        <Partials.CodeableConcept
          codeableConcept={resource.bodysite}
          name="Bodysite"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="bodysite"
        />
      )}
      {resource.factorOverride && (
        <Partials.Decimal
          decimal={resource.factorOverride}
          name="Factor Override"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="factor-override"
        />
      )}
      {resource.enterer && (
        <Partials.Reference
          reference={resource.enterer}
          name="Enterer"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="enterer"
        />
      )}
      {resource.enteredDate && (
        <Partials.DateTime
          dateTime={resource.enteredDate}
          name="Entered Date"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="entered-date"
        />
      )}
      {resource.reason && (
        <Partials.CodeableConcept
          codeableConcept={resource.reason}
          name="Reason"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="reason"
        />
      )}
      {resource.service && (
        <Partials.Reference
          reference={resource.service}
          name="Service"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="service"
        />
      )}
      {resource.productReference && (
        <Partials.Reference
          reference={resource.productReference}
          name="Product Reference"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="product-reference"
        />
      )}
      {resource.productCodeableConcept && (
        <Partials.CodeableConcept
          codeableConcept={resource.productCodeableConcept}
          name="Product Codeable Concept"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="product-codeable-concept"
        />
      )}
      {resource.account && (
        <Partials.Reference
          reference={resource.account}
          name="Account"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="account"
        />
      )}
      {resource.note && (
        <Partials.Annotation
          annotation={resource.note}
          name="Note"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="note"
        />
      )}
      {resource.supportingInformation && (
        <Partials.Reference
          reference={resource.supportingInformation}
          name="Supporting Information"
          resourceType={resource.resourceType}
          id={resource.id}
          searchParameter="supporting-information"
        />
      )}
    </>
  );
};

export default ChargeItem;