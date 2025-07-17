import express from 'express';
import { createAppointment, getAppointments } from '../controllers/appointmentController';
import { protect } from '../middlewares/authMiddleware';
import validate from '../middlewares/validate';
import { createAppointmentSchema } from '../validators/appointmentValidator';

const router = express.Router();

router.post('/', protect, validate(createAppointmentSchema), createAppointment);
router.get('/', protect, getAppointments);

export default router;
