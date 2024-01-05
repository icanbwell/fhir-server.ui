/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

import { TExtension } from '../partials/Extension';
import { TIdentifier } from '../partials/Identifier';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TPeriod } from '../partials/Period';
import { TDateTime } from '../simpleTypes/DateTime';

export type TMedicinalProductAuthorizationProcedure = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    identifier?: TIdentifier;
    type: TCodeableConcept;
    datePeriod?: TPeriod;
    dateDateTime?: TDateTime;
    application?: TMedicinalProductAuthorizationProcedure[];
};
