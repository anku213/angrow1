// /app/api/jobs/route.ts
import dbConnect from 'lib/db';
import Job from 'lib/models/job';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();
  const jobs = await Job.find();
  return NextResponse.json(jobs);
}

export async function POST(req: Request) {
  await dbConnect();
  const data = await req.json();
  const job = await Job.create(data);
  return NextResponse.json(job);
}
