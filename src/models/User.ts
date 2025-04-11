import { Schema, models, model } from 'mongoose';

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
}, { timestamps: true });

export const User = models.User || model('User', UserSchema);
