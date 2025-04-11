// components/ui/Card.tsx
import { ReactNode } from 'react';

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      {children}
    </div>
  );
}