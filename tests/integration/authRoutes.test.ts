import request from 'supertest';
import app from '../../src/app';
import mongoose from 'mongoose';
import User from '../../src/models/User';
import dotenv from 'dotenv';
dotenv.config();

describe('Auth Routes', () => {
  let userId: string;

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI as string);

    // create a test user
    const user = new User({
      username: 'testuser',
      email: 'test@example.com',
      passwordHash: 'test1234',
      roles: ['user']
    });

    await user.save();
    userId = user._id.toString();
  }, 15000);

  afterAll(async () => {
    await User.deleteMany({ email: 'test@example.com' });
    await mongoose.connection.close();
  });

  it('should login and return token', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({
        email: 'test@example.com',
        password: 'test1234'
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
