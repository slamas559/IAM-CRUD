import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt';
import generateToken from '../utils/generateToken';

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid email or password' });

  if (!user.passwordHash) {
    return res.status(500).json({ message: 'User has no password set' });
  }
  
  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

  const token = generateToken(user._id.toString(), user.roles);
  res.json({ token, user });
};

export const getProfile = async (req: any, res: Response) => {
  const user = await User.findById(req.user.id).select('-passwordHash');
  res.json(user);
};
