// src/app.ts
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import appointmentRoutes from './routes/appointmentRoutes';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

app.use('/items', userRoutes);
app.use('/auth', authRoutes);
app.use('/appointments', appointmentRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('Backend is running');
});

export default app;
