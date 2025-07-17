import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  passwordHash: { type: String, required: true },
  roles: [{ type: String, enum: ['admin', 'user', 'doctor'], default: 'user' }],
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  firstName: String,
  lastName: String,
  dob: Date,
  gender: String,
  healthId: String,
  active: { type: Boolean, default: true },
}, {
  timestamps: true
});

// Password hashing before save
UserSchema.pre('save', async function (next) {
  if (!this.isModified('passwordHash')) return next();
  const salt = await bcrypt.genSalt(10);
  this.passwordHash = await bcrypt.hash(this.passwordHash, salt);
  next();
});

const User = mongoose.model('User', UserSchema);

export default User;
