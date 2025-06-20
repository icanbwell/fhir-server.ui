// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TQuantity } from '../partials/Quantity';
import { TSpecimenDefinitionAdditive } from '../partials/SpecimenDefinitionAdditive';

export type TSpecimenDefinitionContainer = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    material?: TCodeableConcept;
    type?: TCodeableConcept;
    cap?: TCodeableConcept;
    description?: String;
    capacity?: TQuantity;
    minimumVolumeQuantity?: TQuantity;
    minimumVolumeString?: String;
    additive?: TSpecimenDefinitionAdditive[];
    preparation?: String;
};

