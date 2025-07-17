import request from 'supertest';
import app from '../../src/app';

describe('User API routes', () => {
  it('GET / should return health message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Backend is running');
  });
});
