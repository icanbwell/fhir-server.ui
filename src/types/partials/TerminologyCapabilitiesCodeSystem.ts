// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCanonical } from '../simpleTypes/Canonical';
import { TTerminologyCapabilitiesVersion } from '../partials/TerminologyCapabilitiesVersion';

export type TTerminologyCapabilitiesCodeSystem = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    uri?: TCanonical;
    version?: TTerminologyCapabilitiesVersion[];
    subsumption?: Boolean;
};

