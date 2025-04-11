// components/layout/Navbar.tsx
"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-green-600">
        angrow
      </Link>
      <div className="space-x-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/jobs">Jobs</Link>
        <Link href="/interview">Interview</Link>
        <Link href="/auth/login" className="text-green-600 font-semibold">Login</Link>
      </div>
    </nav>
  );
}