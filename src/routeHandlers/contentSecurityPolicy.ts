import httpContext from 'express-http-context';
import {constants} from '../constants';
import ConfigManager from "../utils/configManager";

/**
 * This route handler sets the headers for content security policy
 * @param {Express.Request} req - Express request object
 * @param {Express.Response} res - Express response object
 * @param {Function} next - Express next middleware function
 */
export function handleSecurityPolicy(req: Express.Request, res: Express.Response, next: Function): void {
    // get the nonce id for current request
    const nonce = httpContext.get(constants.RESPONSE_NONCE);

    const configManager = new ConfigManager();

    // @ts-ignore
    if (!res.headersSent) {
        // @ts-ignore
        res.setHeader(
            'Content-Security-Policy',
            "default-src 'self' embeddable-sandbox.cdn.apollographql.com apollo-server-landing-page.cdn.apollographql.com; " +
            "object-src data: 'unsafe-eval'; " +
            "font-src 'self' https://fonts.gstatic.com; " +
            "img-src 'self' 'unsafe-inline' 'unsafe-hashes' 'unsafe-eval' data: http://cdn.jsdelivr.net https://embeddable-sandbox.cdn.apollographql.com https://apollo-server-landing-page.cdn.apollographql.com " + configManager.AUTH_CODE_FLOW_URL + ';' +
            "script-src 'self' " + `'nonce-${nonce}' ` + 'https://ajax.googleapis.com/ https://cdnjs.cloudflare.com http://cdn.jsdelivr.net https://embeddable-sandbox.cdn.apollographql.com https://apollo-server-landing-page.cdn.apollographql.com ' + configManager.AUTH_CODE_FLOW_URL + ';' +
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/ http://cdn.jsdelivr.net https://embeddable-sandbox.cdn.apollographql.com https://apollo-server-landing-page.cdn.apollographql.com " + configManager.AUTH_CODE_FLOW_URL + ';' +
            "frame-src 'self' https://embeddable-sandbox.cdn.apollographql.com https://sandbox.embed.apollographql.com/; " +
            "connect-src 'self' " + configManager.AUTH_CODE_FLOW_URL + '/oauth2/token;' +
            "form-action 'self' https://embeddable-sandbox.cdn.apollographql.com https://sandbox.embed.apollographql.com/  https://apollo-server-landing-page.cdn.apollographql.com " + configManager.AUTH_CODE_FLOW_URL + ';' +
            "frame-ancestors 'self' https://embeddable-sandbox.cdn.apollographql.com https://sandbox.embed.apollographql.com/  https://apollo-server-landing-page.cdn.apollographql.com " + configManager.AUTH_CODE_FLOW_URL + ';'
        );
    }
    next();
}

/**
 * This route handler sets the headers for content security policy for graphql
 * @param {Express.Request} req - Express request object
 * @param {Express.Response} res - Express response object
 * @param {Function} next - Express next middleware function
 */
export function handleSecurityPolicyGraphql(req: Express.Request, res: Express.Response, next: Function): void {
    const configManager = new ConfigManager();
    // @ts-ignore
    if (!res.headersSent) {
        // @ts-ignore
        res.setHeader(
            'Content-Security-Policy',
            "default-src 'self' embeddable-sandbox.cdn.apollographql.com apollo-server-landing-page.cdn.apollographql.com; " +
            "object-src data: 'unsafe-eval'; " +
            "font-src 'self' https://fonts.gstatic.com; " +
            "img-src 'self' 'unsafe-inline' 'unsafe-hashes' 'unsafe-eval' data: http://cdn.jsdelivr.net https://embeddable-sandbox.cdn.apollographql.com https://apollo-server-landing-page.cdn.apollographql.com " + configManager.AUTH_CODE_FLOW_URL + ';' +
            "script-src 'self' " + "'unsafe-inline' " + 'https://ajax.googleapis.com/ https://cdnjs.cloudflare.com http://cdn.jsdelivr.net https://embeddable-sandbox.cdn.apollographql.com https://apollo-server-landing-page.cdn.apollographql.com ' + configManager.AUTH_CODE_FLOW_URL + ';' +
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/ http://cdn.jsdelivr.net https://embeddable-sandbox.cdn.apollographql.com https://apollo-server-landing-page.cdn.apollographql.com " + configManager.AUTH_CODE_FLOW_URL + ';' +
            "frame-src 'self' https://embeddable-sandbox.cdn.apollographql.com https://sandbox.embed.apollographql.com/; connect-src 'self' " + configManager.AUTH_CODE_FLOW_URL + '/oauth2/token;' +
            "form-action 'self' https://embeddable-sandbox.cdn.apollographql.com https://sandbox.embed.apollographql.com/  https://apollo-server-landing-page.cdn.apollographql.com " + configManager.AUTH_CODE_FLOW_URL + ';' +
            "frame-ancestors 'self' https://embeddable-sandbox.cdn.apollographql.com https://sandbox.embed.apollographql.com/  https://apollo-server-landing-page.cdn.apollographql.com " + configManager.AUTH_CODE_FLOW_URL + ';'
        );
    }
    next();
}

