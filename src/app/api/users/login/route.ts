import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  // Dummy check (replace with DB or auth logic)
  if (email === "admin@angrow.com" && password === "123456") {
    const token = "your-jwt-token"; // Usually generated from server

    const response = NextResponse.json({ success: true });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });

    return response;
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
