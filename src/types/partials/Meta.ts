/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

import { TExtension } from '../partials/Extension';
import { TId } from '../simpleTypes/Id';
import { TInstant } from '../simpleTypes/Instant';
import { TUri } from '../simpleTypes/Uri';
import { TCanonical } from '../simpleTypes/Canonical';
import { TCoding } from '../partials/Coding';

export type TMeta = {
    id?: String;
    extension?: TExtension[];
    versionId?: TId;
    lastUpdated?: TInstant;
    source?: TUri;
    profile?: TCanonical[];
    security?: TCoding[];
    tag?: TCoding[];
};
