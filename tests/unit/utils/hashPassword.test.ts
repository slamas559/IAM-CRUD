import { hashPassword } from '../../../src/utils/hash';
import bcrypt from 'bcrypt';

describe('Password hashing utility', () => {
  it('should hash and verify password correctly', async () => {
    const plain = 'test123';
    const hashed = await hashPassword(plain);

    const match = await bcrypt.compare(plain, hashed);
    expect(match).toBe(true);
  });
});
