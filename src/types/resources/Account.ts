/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

import { TId } from '../simpleTypes/Id';
import { TMeta } from '../partials/Meta';
import { TUri } from '../simpleTypes/Uri';
import { TNarrative } from '../partials/Narrative';
import { TResourceContainer } from '../simpleTypes/ResourceContainer';
import { TExtension } from '../partials/Extension';
import { TIdentifier } from '../partials/Identifier';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TReference } from '../partials/Reference';
import { TPeriod } from '../partials/Period';
import { TAccountCoverage } from '../partials/AccountCoverage';
import { TAccountGuarantor } from '../partials/AccountGuarantor';

export type TAccount = {
    resourceType?: String;
    id?: TId;
    meta?: TMeta;
    implicitRules?: TUri;
    language?: String;
    text?: TNarrative;
    contained?: TResourceContainer[];
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    identifier?: TIdentifier[];
    status: String;
    type?: TCodeableConcept;
    name?: String;
    subject?: TReference[];
    servicePeriod?: TPeriod;
    coverage?: TAccountCoverage[];
    owner?: TReference;
    description?: String;
    guarantor?: TAccountGuarantor[];
    partOf?: TReference;
};
