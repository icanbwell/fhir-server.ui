import jwt from 'jsonwebtoken';
import { SignOptions, Secret } from 'jsonwebtoken';

/**
 * Creates and signs a token
 * @param {string} key - The key used to sign the token
 * @param {string} kid - The key ID
 * @param {string | Buffer | object} payload - The payload of the token
 * @return {string} - The signed token
 */
export function createToken(
  key: string,
  kid: string,
  payload: string | Buffer | object,
): string {
  const options: SignOptions = {
    noTimestamp: true,
    algorithm: 'RS256',
    issuer: process.env.AUTH_ISSUER,
    header: { alg: 'RS256', kid },
  };

  return jwt.sign(payload, key, options);
}
