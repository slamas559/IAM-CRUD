import jwt from 'jsonwebtoken';
import generateToken from '../../src/utils/generateToken';
import dotenv from 'dotenv';
dotenv.config();

describe('JWT Token Generator', () => {
  it('should generate a valid token', () => {
    const token = generateToken('12345', ['admin']);
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;

    expect(decoded.id).toBe('12345');
    expect(decoded.roles).toContain('admin');
  });
});
