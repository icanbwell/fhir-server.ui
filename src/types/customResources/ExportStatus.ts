import { TOutcomes } from '../baseTypes';
import { TMeta } from '../partials/Meta';
import { TIdentifier } from '../partials/Identifier';

export type TExportStatus = {
    resourceType?: String;
    id?: String;
    meta?: TMeta;
    identifier?: TIdentifier[];
    status: String;
    transactionTime: String;
    output?: TOutcomes[];
    errors?: TOutcomes[];
};
