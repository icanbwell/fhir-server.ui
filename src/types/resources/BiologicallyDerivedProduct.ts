// This file is auto-generated by generate_types so do not edit manually

import { TMeta } from '../partials/Meta';
import { TUri } from '../simpleTypes/Uri';
import { TNarrative } from '../partials/Narrative';
import { TResourceContainer } from '../simpleTypes/ResourceContainer';
import { TExtension } from '../partials/Extension';
import { TIdentifier } from '../partials/Identifier';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TReference } from '../partials/Reference';
import { TInt } from '../simpleTypes/Int';
import { TBiologicallyDerivedProductCollection } from '../partials/BiologicallyDerivedProductCollection';
import { TBiologicallyDerivedProductProcessing } from '../partials/BiologicallyDerivedProductProcessing';
import { TBiologicallyDerivedProductManipulation } from '../partials/BiologicallyDerivedProductManipulation';
import { TBiologicallyDerivedProductStorage } from '../partials/BiologicallyDerivedProductStorage';

export type TBiologicallyDerivedProduct = {
    resourceType?: String;
    id?: String;
    meta?: TMeta;
    implicitRules?: TUri;
    language?: String;
    text?: TNarrative;
    contained?: TResourceContainer[];
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    identifier?: TIdentifier[];
    productCategory?: String;
    productCode?: TCodeableConcept;
    status?: String;
    request?: TReference[];
    quantity?: TInt;
    parent?: TReference[];
    collection?: TBiologicallyDerivedProductCollection;
    processing?: TBiologicallyDerivedProductProcessing[];
    manipulation?: TBiologicallyDerivedProductManipulation;
    storage?: TBiologicallyDerivedProductStorage[];
};

