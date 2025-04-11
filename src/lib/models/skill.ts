// lib/models/skill.ts
import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema({
  name: String,
  level: Number, // optional
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.models.Skill || mongoose.model('Skill', SkillSchema);
