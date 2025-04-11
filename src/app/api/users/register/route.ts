import { User } from '@/models/User';
import dbConnect from 'lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

// REGISTER A USER
export async function POST(req: Request) {
    await dbConnect();
    const data = await req.json();
    const { email, name, password } = data;

    // Check if email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return NextResponse.json(
            {
                success: false,
                message: "Email is already registered!",
            },
            { status: 400 }
        );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log({ ...data, password: hashedPassword })

    const user = await User.create({ name, email, password: hashedPassword });

    return NextResponse.json(
        {
            success: true,
            message: "User registered successfully!",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            },
        },
        { status: 201 }
    );
}
