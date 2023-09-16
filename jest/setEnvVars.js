// These variables are used in the tests
process.env.AUTH_ENABLED = '1';
process.env.AUTH_JWKS_URL = 'http://foo:80/.well-known/jwks.json';
process.env.AUTH_ISSUER = 'http://foo:80';
process.env.NODE_ENV = 'production';
process.env.VALIDATE_SCHEMA = '1';
process.env.EXTERNAL_AUTH_JWKS_URLS = 'http://foo:80/bar/.well-known/jwks.json';
process.env.AUTH_CUSTOM_GROUP = 'groups';
process.env.AUTH_CUSTOM_SCOPE = 'customscope';
process.env.AUTH_CUSTOM_CLIENT_ID = 'custom_client_id';
process.env.LOGLEVEL = 'TRACE';
process.env.FHIR_SERVER_URL = 'https://fhir-server:3000';
