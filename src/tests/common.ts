import { URL } from 'url';
import {
  jwksDiscoveryEndpoint,
  jwksEndpoint,
  jwksUserInfoEndpoint,
} from './mocks/jwks';
import { privateKey, publicKey } from './mocks/keys';
import nock from 'nock';
import { server } from '../index';
import ConfigManager from '../utils/configManager';
import { createToken } from './mocks/tokens';

/**
 * sets up the mongo db and token endpoint
 * @return {Promise<void>}
 */
export const commonBeforeEach = async (): Promise<void> => {
  process.env.AUTH_ENABLED = '1';
  const configManager = new ConfigManager();
  const urlObject = new URL(configManager.AUTH_JWKS_URL);
  jwksEndpoint(urlObject.protocol + '//' + urlObject.host, urlObject.pathname, [
    { pub: publicKey, kid: '123' },
  ]);
  const extJwksUrls: string[] =
    configManager.EXTERNAL_AUTH_JWKS_URLS.split(',');
  extJwksUrls.forEach((extJwksUrl) => {
    if (extJwksUrl) {
      const urlObject1 = new URL(extJwksUrl.trim());
      jwksEndpoint(
        urlObject1.protocol + '//' + urlObject1.host,
        urlObject1.pathname,
        [
          {
            pub: publicKey,
            kid: '123',
          },
        ],
      );
    }
  });
};

/**
 * sets up mock OpenId server
 */
export const setupMockOpenIdServer = ({
  token,
  patientId,
  personId,
}: {
  token: string;
  patientId: string;
  personId: string;
}): void => {
  const configManager = new ConfigManager();
  expect(configManager.AUTH_ISSUER).toBeDefined();
  expect(configManager.AUTH_ISSUER.length).toBeGreaterThan(0);
  const discoveryUrlObject = new URL(configManager.AUTH_ISSUER);
  jwksDiscoveryEndpoint(
    discoveryUrlObject.protocol + '//' + discoveryUrlObject.host,
  );
  jwksUserInfoEndpoint({
    host: discoveryUrlObject.protocol + '//' + discoveryUrlObject.host,
    token,
    patientId,
    personId,
  });
};

/**
 * cleans up the mongo db
 * @return {Promise<void>}
 */
export const commonAfterEach = async (): Promise<void> => {
  nock.cleanAll();

  if (server) {
    server.close();
  }
};

export function getTokenWithAdminClaims(): string {
  return createToken(privateKey, '123', {
    custom_client_id: 'my_custom_client_id',
    groups: ['admin/*.*'],
  });
}

const htmlAcceptHeader: string =
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9';
const htmlUserAgent: string =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36';

export function getHtmlHeadersWithAdminToken(): Object {
  return {
    Accept: htmlAcceptHeader,
    Authorization: `Bearer ${getTokenWithAdminClaims()}`,
    'User-Agent': htmlUserAgent,
  };
}

export function getHtmlHeadersWithoutToken(): Object {
  return {
    Accept: htmlAcceptHeader,
    'User-Agent': htmlUserAgent,
  };
}
