// components/ui/Input.tsx
"use client";
import { InputHTMLAttributes } from 'react';

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  );
}