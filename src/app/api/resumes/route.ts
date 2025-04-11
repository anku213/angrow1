// /app/api/resumes/route.ts
import dbConnect from 'lib/db';
import Resume from 'lib/models/resume';
import { NextResponse } from 'next/server';

export async function GET() {
    await dbConnect();
    const resumes = await Resume.find();
    return NextResponse.json(resumes);
}

export async function POST(req: Request) {
    await dbConnect();
    const data = await req.json();
    const resume = await Resume.create(data);
    return NextResponse.json(resume);
}