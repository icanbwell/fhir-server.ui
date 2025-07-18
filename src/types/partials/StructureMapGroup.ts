// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TId } from '../simpleTypes/Id';
import { TStructureMapInput } from '../partials/StructureMapInput';
import { TStructureMapRule } from '../partials/StructureMapRule';

export type TStructureMapGroup = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    name: TId;
    extends_?: TId;
    typeMode: String;
    documentation?: String;
    input: TStructureMapInput[];
    rule: TStructureMapRule[];
};

