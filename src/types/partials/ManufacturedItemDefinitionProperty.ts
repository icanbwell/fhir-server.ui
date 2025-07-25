// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TQuantity } from '../partials/Quantity';
import { TDate } from '../simpleTypes/Date';
import { TAttachment } from '../partials/Attachment';

export type TManufacturedItemDefinitionProperty = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    type: TCodeableConcept;
    valueCodeableConcept?: TCodeableConcept;
    valueQuantity?: TQuantity;
    valueDate?: TDate;
    valueBoolean?: Boolean;
    valueAttachment?: TAttachment;
};

