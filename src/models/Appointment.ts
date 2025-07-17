import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  reason: { type: String },
  status: { type: String, enum: ['scheduled', 'completed', 'cancelled'], default: 'scheduled' }
}, {
  timestamps: true
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);
export default Appointment;
