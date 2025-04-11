// lib/models/resume.ts
import mongoose from 'mongoose';

const ResumeSchema = new mongoose.Schema({
  url: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.models.Resume || mongoose.model('Resume', ResumeSchema);
