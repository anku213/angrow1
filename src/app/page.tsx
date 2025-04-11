// app/page.tsx
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-green-700">Welcome to angrow</h1>
      <p className="text-gray-600">
        Track your technical skills, prepare for interviews, share resumes, and get hired!
      </p>
      <Card>
        <h2 className="text-xl font-semibold mb-2">Get Started</h2>
        <Button>Explore Dashboard</Button>
      </Card>
    </div>
  );
}
