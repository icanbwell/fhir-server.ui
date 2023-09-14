import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import jwksRsa from 'jwks-rsa';
import env from 'var';
import { logDebug, logError } from '../operations/common/logging';
import { isTrue } from '../utils/isTrue';
import async from 'async';
import superagent from 'superagent';
import { Issuer } from 'openid-client';
import { IncomingMessage } from 'http';
import { JSONWebKey } from 'jwks-rsa';
import { Issuer as OpenIdIssuer, BaseClient, UserinfoResponse, UnknownObject } from 'openid-client';

const requiredJWTFields: string[] = [
    'custom:bwellFhirPersonId',
];

const getExternalJwksByUrlAsync = async (jwksUrl: string): Promise<JSONWebKey[]> => {
    const res = await superagent.get(jwksUrl).set({
        'Accept': 'application/json'
    });
    const jsonResponse = JSON.parse(res.text);
    return jsonResponse.keys;
};

const getExternalJwksAsync = async (): Promise<JSONWebKey[]> => {
    if (env.EXTERNAL_AUTH_JWKS_URLS.length > 0) {
        const extJwksUrls: string[] = env.EXTERNAL_AUTH_JWKS_URLS.split(',');
        const keysArray: JSONWebKey[][] = await async.map(
            extJwksUrls,
            async (extJwksUrl: string) => await getExternalJwksByUrlAsync(extJwksUrl.trim())
        );
        return keysArray.flat(2);
    }

    return [];
};

let openIdClientIssuer: OpenIdIssuer<BaseClient> | null = null;

const getOrCreateOpenIdClientIssuerAsync = async (): Promise<OpenIdIssuer<BaseClient>> => {
    if (!openIdClientIssuer) {
        if (!env.AUTH_ISSUER) {
            logError('AUTH_ISSUER environment variable is not set', {});
        }
        const issuerUrl = env.AUTH_ISSUER;
        openIdClientIssuer = await Issuer.discover(issuerUrl);
    }
    return openIdClientIssuer;
};

const getUserInfoAsync = async (accessToken: string): Promise<UserinfoResponse<Object | undefined, UnknownObject> | undefined> => {
    const issuer = await getOrCreateOpenIdClientIssuerAsync();
    if (!issuer) {
        return undefined;
    }
    if (!env.AUTH_CODE_FLOW_CLIENT_ID) {
        logError('AUTH_CODE_FLOW_CLIENT_ID environment variable is not set', {});
    }

    const client: BaseClient = new issuer.Client({
        client_id: env.AUTH_CODE_FLOW_CLIENT_ID,
    });

    if (!client) {
        return undefined;
    }
    return await client.userinfo(accessToken);
};

const cookieExtractor = function (req: IncomingMessage): string | null {
    let token: string | null = null;
    if (req && req.cookies) {
        token = req.cookies['jwt'];
        logDebug('Found cookie jwt', {user: '', args: {token: token}});
    } else {
        logDebug('No cookies found', {user: ''});
    }
    return token;
};

type RequestCallback = (user: Object, info: Object, details?: Object) => void;

function parseUserInfoFromPayload({username, subject, isUser, jwt_payload, done, client_id, scope}: {username: string, subject: string, isUser: boolean, jwt_payload: Object, done: RequestCallback, client_id: string, scope: string | null}): Object {
    const context: {[key: string]: any} = {};
    if (username) {
        context['username'] = username;
    }
    if (subject) {
        context['subject'] = subject;
    }
    if (isUser) {
        context['isUser'] = isUser;
        let validInput = true;
        requiredJWTFields.forEach((field) => {
            if (!jwt_payload[`${field}`]) {
                logDebug(`Error: ${field} field is missing`, {user: ''});
                validInput = false;
            }
        });
        if (!validInput) {
            return done(null, false);
        }
        const fhirPatientId = jwt_payload['custom:bwell_fhir_id'];
        if (jwt_payload['custom:bwell_fhir_ids']) {
            const patientIdsFromJwtToken = jwt_payload['custom:bwell_fhir_ids'].split('|');
            if (patientIdsFromJwtToken && patientIdsFromJwtToken.length > 0) {
                context['patientIdsFromJwtToken'] = patientIdsFromJwtToken;
            }
        } else if (fhirPatientId) {
            context['patientIdsFromJwtToken'] = [fhirPatientId];
        }
        context['personIdFromJwtToken'] = jwt_payload['custom:bwellFhirPersonId'];
    }

    return done(null, {id: client_id, isUser, name: username, username: username}, {scope, context});
}

const verify = (request: IncomingMessage, jwt_payload: Object, done: RequestCallback): any => {
    if (jwt_payload) {
        let isUser = false;
        if (jwt_payload['cognito:username']) {
            isUser = true;
        }
        const client_id = jwt_payload.client_id ? jwt_payload.client_id : jwt_payload[env.AUTH_CUSTOM_CLIENT_ID];
        let scope = jwt_payload.scope ? jwt_payload.scope : jwt_payload[env.AUTH_CUSTOM_SCOPE];
        const groups = jwt_payload[env.AUTH_CUSTOM_GROUP] ? jwt_payload[env.AUTH_CUSTOM_GROUP] : '';
        const username = jwt_payload.username ? jwt_payload.username : jwt_payload['cognito:username'];
        const subject = jwt_payload.subject ? jwt_payload.subject : jwt_payload[env.AUTH_CUSTOM_SUBJECT];
        const tokenUse = jwt_payload.token_use ? jwt_payload.token_use : null;

        if (groups.length > 0) {
            scope = scope ? scope + ' ' + groups.join(' ') : groups.join(' ');
        }

        const scopes = scope ? scope.split(' ') : [];
        if (
            scopes.some(s => s.toLowerCase().startsWith('patient/')) &&
            scopes.some(s => s.toLowerCase().startsWith('openid')) &&
            scopes.every(s => !s.toLowerCase().startsWith('user/')) &&
            tokenUse === 'access'
        ) {
            isUser = true;
            const authorizationHeader = request.header('Authorization');
            const accessToken = authorizationHeader ? authorizationHeader.split(' ').pop() : cookieExtractor(request);
            if (accessToken) {
                return getUserInfoAsync(accessToken).then(
                    (id_token_payload) => {
                        return parseUserInfoFromPayload(
                            {
                                username, subject, isUser, jwt_payload: id_token_payload, done, client_id, scope
                            }
                        );
                    }
                ).catch(error => {
                    logError('Error in parsing token for patient scope', error);
                });
            }
        } else {
            return parseUserInfoFromPayload(
                {
                    username, subject, isUser, jwt_payload, done, client_id, scope
                }
            );
        }
    }

    return done(null, false);
};

class MyJwtStrategy extends JwtStrategy {
    constructor(options: any, verifyFn: any) {
        super(options, verifyFn);
    }

    authenticate(req: any, options: any) {
        const self = this;
        const token = self._jwtFromRequest(req);
        const resourceUrl = req.originalUrl ? Buffer.from(req.originalUrl).toString('base64') : '';
        if (
            !token &&
            req.accepts('text/html') &&
            req.useragent &&
            req.useragent.isDesktop &&
            isTrue(env.REDIRECT_TO_LOGIN) &&
            (req.method === 'GET' ||
                (req.method === 'POST' && resourceUrl && resourceUrl.includes('_search')))
        ) {
            const httpProtocol = env.ENVIRONMENT === 'local' ? 'http' : 'https';
            const redirectUrl = `${env.AUTH_CODE_FLOW_URL}/login?` +
                `response_type=code&client_id=${env.AUTH_CODE_FLOW_CLIENT_ID}` +
                `&redirect_uri=${httpProtocol}://${req.headers.host}/authcallback&state=${resourceUrl}`;
            logDebug('Redirecting', {user: '', args: {redirect: redirectUrl}});
            return self.redirect(redirectUrl);
        }

        return super.authenticate(req, options);
    }
}

export const strategy = new MyJwtStrategy(
    {
        secretOrKeyProvider: jwksRsa.passportJwtSecret({
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 5,
            jwksUri: env.AUTH_JWKS_URL,
            getKeysInterceptor: async () => {
                return await getExternalJwksAsync();
            },
            handleSigningKeyError: (err, cb) => {
                if (err instanceof jwksRsa.SigningKeyNotFoundError) {
                    logDebug('No Signing Key found!', {user: ''});
                    return cb(new Error('No Signing Key found!'));
                }
                return cb(err);
            },
        }),
        jwtFromRequest: ExtractJwt.fromExtractors([
            ExtractJwt.fromHeader('x-bwell-identity'),
            ExtractJwt.fromAuthHeaderAsBearerToken(),
            cookieExtractor,
            ExtractJwt.fromUrlQueryParameter('token'),
        ]),
        algorithms: ['RS256'],
        passReqToCallback: true
    },
    verify
);
