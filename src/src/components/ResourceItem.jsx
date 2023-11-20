import Practitioner from '../pages/resources/Practitioner';
import Patient from '../pages/resources/Patient';
import Account from '../pages/resources/Account';
import ActivityDefinition from '../pages/resources/ActivityDefinition';
import AllergyIntolerance from '../pages/resources/AllergyIntolerance';
import ChargeItem from '../pages/resources/ChargeItem';
import CareTeam from '../pages/resources/CareTeam';
import Appointment from '../pages/resources/Appointment';
import AuditEvent from '../pages/resources/AuditEvent';
import Communication from '../pages/resources/Communication';
import Encounter from '../pages/resources/Encounter';
import InsurancePlan from '../pages/resources/InsurancePlan';
import Invoice from '../pages/resources/Invoice';
import Library from '../pages/resources/Library';
import Measure from '../pages/resources/Measure';
import Medication from '../pages/resources/Medication';
import MedicationAdministration from '../pages/resources/MedicationAdministration';
import MedicationDispense from '../pages/resources/MedicationDispense';
import MedicationRequest from '../pages/resources/MedicationRequest';
import Observation from '../pages/resources/Observation';
import Condition from '../pages/resources/Condition';
import Consent from '../pages/resources/Consent';
import Coverage from '../pages/resources/Coverage';
import ExplanationOfBenefit from '../pages/resources/ExplanationOfBenefit';
import HealthcareService from '../pages/resources/HealthcareService';
import Immunization from '../pages/resources/Immunization';
import Location from '../pages/resources/Location';
import MeasureReport from '../pages/resources/MeasureReport';
import MedicationStatement from '../pages/resources/MedicationStatement';
import Organization from '../pages/resources/Organization';
import OrganizationAffiliation from '../pages/resources/OrganizationAffiliation';
import Person from '../pages/resources/Person';
import PractitionerRole from '../pages/resources/PractitionerRole';
import Procedure from '../pages/resources/Procedure';
import QuestionnaireResponse from '../pages/resources/QuestionnaireResponse';
import Schedule from '../pages/resources/Schedule';
import ServiceRequest from '../pages/resources/ServiceRequest';
import Slot from '../pages/resources/Slot';
import Task from '../pages/resources/Task';
import ValueSet from '../pages/resources/ValueSet';
import DomainResource from '../pages/resources/DomainResource';
import OperationOutcome from '../pages/resources/OperationOutcome';

function ResourceItem({ resourceType, resource, index }) {
  console.log(`ResourceItem: resourceType=${resourceType}`);
  switch (resourceType) {
    case 'Account':
      return <Account resource={resource} index={index} />;
    case 'ActivityDefinition':
      return <ActivityDefinition resource={resource} index={index} />;
    case 'AllergyIntolerance':
      return <AllergyIntolerance resource={resource} index={index} />;
    case 'Appointment':
      return <Appointment resource={resource} index={index} />;
    case 'AuditEvent':
      return <AuditEvent resource={resource} index={index} />;
    case 'CareTeam':
      return <CareTeam resource={resource} index={index} />;
    case 'ChargeItem':
      return <ChargeItem resource={resource} index={index} />;
    case 'Communication':
      return <Communication resource={resource} index={index} />;
    case 'Condition':
      return <Condition resource={resource} index={index} />;
    case 'Consent':
      return <Consent resource={resource} index={index} />;
    case 'Coverage':
      return <Coverage resource={resource} index={index} />;
    case 'Encounter':
      return <Encounter resource={resource} index={index} />;
    case 'ExplanationOfBenefit':
      return <ExplanationOfBenefit resource={resource} index={index} />;
    case 'HealthcareService':
      return <HealthcareService resource={resource} index={index} />;
    case 'Immunization':
      return <Immunization resource={resource} index={index} />;
    case 'InsurancePlan':
      return <InsurancePlan resource={resource} index={index} />;
    case 'Invoice':
      return <Invoice resource={resource} index={index} />;
    case 'Library':
      return <Library resource={resource} index={index} />;
    case 'Location':
      return <Location resource={resource} index={index} />;
    case 'Measure':
      return <Measure resource={resource} index={index} />;
    case 'MeasureReport':
      return <MeasureReport resource={resource} index={index} />;
    case 'Medication':
      return <Medication resource={resource} index={index} />;
    case 'MedicationAdministration':
      return <MedicationAdministration resource={resource} index={index} />;
    case 'MedicationDispense':
      return <MedicationDispense resource={resource} index={index} />;
    case 'MedicationRequest':
      return <MedicationRequest resource={resource} index={index} />;
    case 'MedicationStatement':
      return <MedicationStatement resource={resource} index={index} />;
    case 'Observation':
      return <Observation resource={resource} index={index} />;
    case 'OperationOutcome':
      return <OperationOutcome resource={resource} index={index} />;
    case 'Organization':
      return <Organization resource={resource} index={index} />;
    case 'OrganizationAffiliation':
      return <OrganizationAffiliation resource={resource} index={index} />;
    case 'Patient':
      return <Patient resource={resource} index={index} />;
    case 'Person':
      return <Person resource={resource} index={index} />;
    case 'Practitioner':
      return <Practitioner resource={resource} index={index} />;
    case 'PractitionerRole':
      return <PractitionerRole resource={resource} index={index} />;
    case 'Procedure':
      return <Procedure resource={resource} index={index} />;
    case 'QuestionnaireResponse':
      return <QuestionnaireResponse resource={resource} index={index} />;
    case 'Schedule':
      return <Schedule resource={resource} index={index} />;
    case 'ServiceRequest':
      return <ServiceRequest resource={resource} index={index} />;
    case 'Slot':
      return <Slot resource={resource} index={index} />;
    case 'Task':
      return <Task resource={resource} index={index} />;
    case 'ValueSet':
      return <ValueSet resource={resource} index={index} />;
    default:
      return <DomainResource resource={resource} index={index} />;
  }
}

export default ResourceItem;
