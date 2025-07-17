import request from 'supertest';
import app from '../../src/app';

describe('GET /', () => {
  it('should return health check message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Backend is running');
  });
});
