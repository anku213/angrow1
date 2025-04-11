// lib/models/user.ts
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['user', 'company', 'admin'], default: 'user' },
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
  resumes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resume' }],
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
