const testServer = require('supertest');
const app = require('../server');

test('It should respond 200 to logout route', () => {
    return testServer(app).post('api/user/logout').then( (response) => {
        expect (response.statusCode).toBe(200)
    })
});