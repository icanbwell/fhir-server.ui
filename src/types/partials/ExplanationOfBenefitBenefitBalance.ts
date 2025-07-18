// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TExplanationOfBenefitFinancial } from '../partials/ExplanationOfBenefitFinancial';

export type TExplanationOfBenefitBenefitBalance = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    category: TCodeableConcept;
    excluded?: Boolean;
    name?: String;
    description?: String;
    network?: TCodeableConcept;
    unit?: TCodeableConcept;
    term?: TCodeableConcept;
    financial?: TExplanationOfBenefitFinancial[];
};

