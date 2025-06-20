// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TReference } from '../partials/Reference';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TDateTime } from '../simpleTypes/DateTime';

export type TVerificationResultPrimarySource = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    who?: TReference;
    type?: TCodeableConcept[];
    communicationMethod?: TCodeableConcept[];
    validationStatus?: TCodeableConcept;
    validationDate?: TDateTime;
    canPushUpdates?: TCodeableConcept;
    pushTypeAvailable?: TCodeableConcept[];
};

