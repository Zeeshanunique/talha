const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return welcome message', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Welcome to the Talha API!');
  });
});