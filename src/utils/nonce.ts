import crypto from 'node:crypto';
import {assertIsValid} from './assertType';

/**
 * Generates a nonce of a given size.
 * @param {number} size - The size of the nonce to generate.
 * @returns {string} The generated nonce.
 */
export function generateNonce(size: number = 16): string {
    assertIsValid(Number.isInteger(size));
    return crypto.randomBytes(size).toString('base64');
}
