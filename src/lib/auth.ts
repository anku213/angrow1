// lib/auth.ts
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export function getUserFromToken() {
    //   const token = cookies().get('token')?.value;
    const token = localStorage.getItem('token')
    if (!token) return null;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        return decoded;
    } catch (err) {
        return null;
    }
}
