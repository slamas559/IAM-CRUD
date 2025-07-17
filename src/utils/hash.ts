import bcrypt from 'bcrypt';

export const hashPassword = async (plain: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(plain, salt);
};
