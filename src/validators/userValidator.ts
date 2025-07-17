import Joi from 'joi';

export const createUserSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  passwordHash: Joi.string().min(6).required(),
  roles: Joi.array().items(Joi.string().valid('admin', 'user', 'doctor')).default(['user']),
  status: Joi.string().valid('active', 'inactive').default('active'),
  firstName: Joi.string(),
  lastName: Joi.string(),
  dob: Joi.date(),
  gender: Joi.string().valid('male', 'female', 'other'),
  healthId: Joi.string(),
  active: Joi.boolean()
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});
