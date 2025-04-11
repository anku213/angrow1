// components/ui/Modal.tsx
"use client";
import { ReactNode } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: Props) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">×</button>
        {children}
      </div>
    </div>
  );
}