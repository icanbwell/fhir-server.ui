/**
 * This file implement helper functions for generate uuids
 */

import * as crypto from 'crypto';


/**
 * Generates a UUID
 * @return {string}
 */
const generateUUID = (): string => crypto.randomUUID();


export {
    generateUUID,
};
