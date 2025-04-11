// app/layout.tsx
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata = {
  title: 'angrow',
  description: 'Track skills, prepare for interviews, and get hired!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
