// This file is auto-generated by generate_types so do not edit manually

import { TExtension } from '../partials/Extension';
import { TInt } from '../simpleTypes/Int';
import { TPeriod } from '../partials/Period';

export type TContactPoint = {
    id?: String;
    extension?: TExtension[];
    system?: String;
    value?: String;
    use?: String;
    rank?: TInt;
    period?: TPeriod;
};

