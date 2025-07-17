import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/userController';
import { protect } from '../middlewares/authMiddleware';
import { authorizeRoles } from '../middlewares/roleMiddleware';
import validate from '../middlewares/validate';
import { createUserSchema } from '../validators/userValidator';


const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', protect, authorizeRoles('admin'), createUser, validate(createUserSchema));
router.put('/:id', updateUser);
router.delete('/:id', protect, authorizeRoles('admin'), deleteUser);

export default router;
