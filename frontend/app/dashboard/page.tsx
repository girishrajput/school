import Link from 'next/link';

export default function DashboardPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="space-y-2">
        <Link className="text-blue-600 hover:underline" href="/dashboard/students">Students</Link>
        <Link className="text-blue-600 hover:underline" href="/dashboard/admissions">Admissions</Link>
        <Link className="text-blue-600 hover:underline" href="/dashboard/fees">Fees</Link>
        <Link className="text-blue-600 hover:underline" href="/dashboard/attendance">Attendance</Link>
        <Link className="text-blue-600 hover:underline" href="/dashboard/exams">Exams</Link>
        <Link className="text-blue-600 hover:underline" href="/dashboard/teachers">Teachers</Link>
      </div>
      <p className="mt-4 text-slate-700">Select a module to manage records.</p>
    </main>
  );
}
