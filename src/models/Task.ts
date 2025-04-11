import { Schema, models, model } from 'mongoose';

const TaskSchema = new Schema({
    title: String,
    description: String,
    status: { type: Boolean, default: false },
}, { timestamps: true });

export const Task = models.Task || model('Task', TaskSchema);
