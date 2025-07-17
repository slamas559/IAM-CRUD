import express from 'express';
import { loginUser, getProfile } from '../controllers/authController';
import { protect } from '../middlewares/authMiddleware';
import validate from '../middlewares/validate';
import { createUserSchema } from '../validators/userValidator';


const router = express.Router();

router.post('/login', loginUser, validate(createUserSchema));
router.get('/profile', protect, getProfile);

export default router;