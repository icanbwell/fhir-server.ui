// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TMedicinalProductDefinitionNamePart } from '../partials/MedicinalProductDefinitionNamePart';
import { TMedicinalProductDefinitionCountryLanguage } from '../partials/MedicinalProductDefinitionCountryLanguage';

export type TMedicinalProductDefinitionName = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    productName: String;
    type?: TCodeableConcept;
    namePart?: TMedicinalProductDefinitionNamePart[];
    countryLanguage?: TMedicinalProductDefinitionCountryLanguage[];
};

