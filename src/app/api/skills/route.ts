// /app/api/skills/route.ts
import Skill from 'lib/models/skill';
import dbConnect from 'lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();
  const skills = await Skill.find();
  return NextResponse.json(skills);
}

export async function POST(req: Request) {
  await dbConnect();
  const data = await req.json();
  const skill = await Skill.create(data);
  return NextResponse.json(skill);
}