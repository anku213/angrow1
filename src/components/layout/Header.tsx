"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "1rem", background: "#4287f5", color: "#fff" }}>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/about">About</Link>
        <Link href="/tasks">Tasks</Link>
        <Link href="/users">Users</Link>
      </nav>
    </header>
  );
}
