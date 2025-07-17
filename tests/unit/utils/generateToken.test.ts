import dotenv from 'dotenv';
dotenv.config();

import jwt from 'jsonwebtoken';
import generateToken from '../../../src/utils/generateToken';

describe('Token Generator', () => {
  it('should return a signed JWT with user info', () => {
    const token = generateToken('userId123', ['admin']);
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;

    expect(decoded.id).toBe('userId123');
    expect(decoded.roles).toContain('admin');
  });
});
