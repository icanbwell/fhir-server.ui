// This file is auto-generated by generate_types so do not edit manually

import { TMeta } from '../partials/Meta';
import { TUri } from '../simpleTypes/Uri';
import { TNarrative } from '../partials/Narrative';
import { TResourceContainer } from '../simpleTypes/ResourceContainer';
import { TExtension } from '../partials/Extension';
import { TIdentifier } from '../partials/Identifier';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TReference } from '../partials/Reference';
import { TTiming } from '../partials/Timing';
import { TDeviceMetricCalibration } from '../partials/DeviceMetricCalibration';

export type TDeviceMetric = {
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
    type: TCodeableConcept;
    unit?: TCodeableConcept;
    source?: TReference;
    parent?: TReference;
    operationalStatus?: String;
    color?: String;
    category: String;
    measurementPeriod?: TTiming;
    calibration?: TDeviceMetricCalibration[];
};

