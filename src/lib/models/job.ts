// lib/models/job.ts
import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  company: String,
  location: String,
  skillsRequired: [String],
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.models.Job || mongoose.model('Job', JobSchema);
