import request from 'supertest';
import app from '../index';

/**
 * @description Test suite for GET /hello endpoint
 */
describe('GET /hello', () => {
    /**
     * @description Test case to check if the endpoint responds with 'Hello, World!'
     */
    it('responds with Hello, World!', async () => {
        const response: request.Response = await request(app)
            .get('/hello')
            .expect('Content-Type', /json/)
            .expect(200);

        expect(response.body.message).toBe('Hello, World!');
    });
});
