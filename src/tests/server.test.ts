import request from 'supertest';
import {app, server} from '../index';
import {commonAfterEach, commonBeforeEach, getHtmlHeadersWithAdminToken} from "./common";

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
    /**
     * @description Test case to check if the endpoint responds with 'Hello, World!'
     */
    it('/health responds with OK', async () => {
        const response: request.Response = await request(app)
            .get('/health')
            .expect('Content-Type', /json/)
            .expect(200);

        expect(response.body.status).toBe('OK');
        server.close();
    });
    it('/admin responds properly', async () => {
        const response: request.Response = await request(app)
            .get('/admin')
            .set(getHtmlHeadersWithAdminToken())
            .expect(200);
    });
    server.close();
});
