import { Request, Response } from 'express';
import Appointment from '../models/Appointment';

export const createAppointment = async (req: any, res: Response) => {
  try {
    const { date, reason } = req.body;
    const appointment = await Appointment.create({
      userId: req.user.id,
      date,
      reason
    });
    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create appointment', error: err });
  }
};

export const getAppointments = async (req: Request, res: Response) => {
  const userId = req.query.userId;
  if (!userId) return res.status(400).json({ message: 'userId is required' });

  const appointments = await Appointment.find({ userId });
  res.json(appointments);
};
