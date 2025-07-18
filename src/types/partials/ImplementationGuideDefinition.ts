// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TImplementationGuideGrouping } from '../partials/ImplementationGuideGrouping';
import { TImplementationGuideResource } from '../partials/ImplementationGuideResource';
import { TImplementationGuidePage } from '../partials/ImplementationGuidePage';
import { TImplementationGuideParameter } from '../partials/ImplementationGuideParameter';
import { TImplementationGuideTemplate } from '../partials/ImplementationGuideTemplate';

export type TImplementationGuideDefinition = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    grouping?: TImplementationGuideGrouping[];
    resource: TImplementationGuideResource[];
    page?: TImplementationGuidePage;
    parameter?: TImplementationGuideParameter[];
    template?: TImplementationGuideTemplate[];
};

