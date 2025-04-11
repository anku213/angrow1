import { User } from '@/models/User';
import dbConnect from 'lib/db';
import { NextResponse } from 'next/server';

// GET all user
export async function GET() {
    await dbConnect();
    const user = await User.find();
    return NextResponse.json(user);
}

// CREATE a user
export async function POST(req: Request) {
    await dbConnect();
    const data = await req.json();
    console.log(data)
    const user = await User.create(data);
    return NextResponse.json(user);
}
