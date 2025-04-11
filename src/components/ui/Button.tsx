// components/ui/Button.tsx
"use client";
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={clsx(
        "px-4 py-2 rounded-xl font-medium shadow-sm transition",
        variant === "primary" && "bg-green-600 text-white hover:bg-green-700",
        variant === "secondary" && "bg-gray-200 text-black hover:bg-gray-300"
      )}
    >
      {children}
    </button>
  );
}
