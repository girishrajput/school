"use client";

import { useEffect, useState } from 'react';
import { getAttendance, markAttendance, getMonthlyAttendance, bulkAttendance } from '../../lib/api';

type AttendanceType = { id: string; studentId: string; date: string; status: string };

type ReportRow = { studentId: string; status: string; _count: { status: number } };

export default function AttendancePage() {
  const [attendance, setAttendance] = useState<AttendanceType[]>([]);
  const [message, setMessage] = useState('');
  const [row, setRow] = useState({ studentId: '', date: '', status: 'PRESENT' });
  const [report, setReport] = useState<ReportRow[]>([]);

  const load = async () => {
    try {
      const res = await getAttendance();
      setAttendance(res.data);
    } catch {
      setMessage('Failed loading attendance.');
    }
  };

  useEffect(() => { load(); }, []);

  const submitRow = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await markAttendance({ ...row, schoolId: window.localStorage.getItem('schoolId') || '' });
      setMessage('Attendance marked.');
      setRow({ studentId: '', date: '', status: 'PRESENT' });
      load();
    } catch {
      setMessage('Failed marking attendance.');
    }
  };

  const fetchReport = async () => {
    try {
      const now = new Date();
      const res = await getMonthlyAttendance(now.getMonth() + 1, now.getFullYear());
      setReport(res.data);
    } catch {
      setMessage('Failed monthly report.');
    }
  };

  const addBulk = async () => {
    try {
      const data = attendance.slice(0, 5).map((entry) => ({ ...entry, schoolId: window.localStorage.getItem('schoolId') || '' }));
      await bulkAttendance(data);
      setMessage('Bulk attendance saved.');
      load();
    } catch {
      setMessage('Bulk save error.');
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Attendance</h1>
      <p className="text-green-600 mb-4">{message}</p>

      <form onSubmit={submitRow} className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-4">
        <input value={row.studentId} onChange={(e) => setRow({ ...row, studentId: e.target.value })} placeholder="Student ID" className="border p-2 rounded" />
        <input value={row.date} onChange={(e) => setRow({ ...row, date: e.target.value })} type="date" className="border p-2 rounded" />
        <select value={row.status} onChange={(e) => setRow({ ...row, status: e.target.value })} className="border p-2 rounded">
          <option value="PRESENT">PRESENT</option>
          <option value="ABSENT">ABSENT</option>
          <option value="LEAVE">LEAVE</option>
        </select>
        <button className="bg-blue-600 text-white p-2 rounded">Mark Attendance</button>
      </form>

      <div className="mb-5">
        <button onClick={fetchReport} className="bg-teal-600 text-white p-2 rounded mr-2">Monthly Report</button>
        <button onClick={addBulk} className="bg-orange-600 text-white p-2 rounded">Bulk Mark (Sample)</button>
      </div>

      <section className="mb-4">
        <h2 className="font-semibold">Recent Records</h2>
        <ul className="space-y-2 mt-2">
          {attendance.map((item) => (
            <li key={item.id} className="border p-2 rounded">{item.studentId} {item.date.split('T')[0]} {item.status}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-semibold">Monthly Summary</h2>
        <ul className="space-y-2 mt-2">
          {report.map((item, idx) => (
            <li key={idx} className="border p-2 rounded">{item.studentId} {item.status}: {item._count.status}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
