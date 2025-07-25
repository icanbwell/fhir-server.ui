// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TIdentifier } from '../partials/Identifier';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TInt } from '../simpleTypes/Int';
import { TPackagedProductDefinitionShelfLifeStorage } from '../partials/PackagedProductDefinitionShelfLifeStorage';
import { TReference } from '../partials/Reference';
import { TPackagedProductDefinitionProperty } from '../partials/PackagedProductDefinitionProperty';
import { TPackagedProductDefinitionContainedItem } from '../partials/PackagedProductDefinitionContainedItem';

export type TPackagedProductDefinitionPackage = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    identifier?: TIdentifier[];
    type?: TCodeableConcept;
    quantity?: TInt;
    material?: TCodeableConcept[];
    alternateMaterial?: TCodeableConcept[];
    shelfLifeStorage?: TPackagedProductDefinitionShelfLifeStorage[];
    manufacturer?: TReference[];
    property?: TPackagedProductDefinitionProperty[];
    containedItem?: TPackagedProductDefinitionContainedItem[];
    package?: TPackagedProductDefinitionPackage[];
};

