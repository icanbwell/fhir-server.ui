// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { THumanName } from '../partials/HumanName';
import { TContactPoint } from '../partials/ContactPoint';
import { TAddress } from '../partials/Address';

export type TOrganizationContact = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    purpose?: TCodeableConcept;
    name?: THumanName;
    telecom?: TContactPoint[];
    address?: TAddress;
};

