import jwt from 'jsonwebtoken';

const generateToken = (id: string, roles: string[]) => {
  return jwt.sign({ id, roles }, process.env.JWT_SECRET!, {
    expiresIn: '1d'
  });
};

export default generateToken;
