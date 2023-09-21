import request from 'supertest';
import {server} from '../index';
import {
    commonAfterEach,
    commonBeforeEach,
    getHtmlHeadersWithAdminToken,
    getHtmlHeadersWithoutToken,
    getTokenWithAdminClaims
} from "./common";
import {app} from "../app";

/**
 * @description Test suite for GET /hello endpoint
 */
describe('GET /hello', () => {
    beforeEach(() => {
            commonBeforeEach();
        }
    );

    afterEach(() => {
            commonAfterEach();
        }
    );
    it('/admin responds properly', async () => {
        const response: request.Response = await request(app)
            .get('/admin/')
            .set(getHtmlHeadersWithAdminToken())
            .expect(200);
        const startText = "<!doctype html>"
        expect(response.text).toMatch(new RegExp(`^${startText}?`));
        server.close();
    });
    it('/admin responds properly without auth header', async () => {
        const response: request.Response = await request(app)
            .get('/admin/')
            .set(getHtmlHeadersWithoutToken())
            .expect(401);
        server.close();
    });
    it('/admin responds properly without auth header but has cookie', async () => {
        const token = getTokenWithAdminClaims();
        const response: request.Response = await request(app)
            .get('/admin/')
            .set(getHtmlHeadersWithoutToken())
            .set('Cookie', [`jwt=${token}`])
            .expect(200);
        const startText = "<!doctype html>"
        expect(response.text).toMatch(new RegExp(`^${startText}?`));
        server.close();
    });
});
