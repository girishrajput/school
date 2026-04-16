"use client";

import { useEffect, useState } from 'react';
import { getAdmissions, submitAdmission, updateAdmission } from '../../lib/api';

type Admission = {
  id: string;
  studentName: string;
  parentName: string;
  status: string;
  createdAt: string;
};

export default function AdmissionsPage() {
  const [admissions, setAdmissions] = useState<Admission[]>([]);
  const [form, setForm] = useState({ studentName: '', parentName: '', email: '', phone: '', schoolId: '' });
  const [msg, setMsg] = useState('');

  const load = async () => {
    try {
      const res = await getAdmissions();
      setAdmissions(res.data);
    } catch {
      setMsg('Unable to load admissions');
    }
  };

  useEffect(() => {
    load();
  }, []);

  const create = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitAdmission(form);
      setMsg('Application submitted');
      setForm({ studentName: '', parentName: '', email: '', phone: '', schoolId: '' });
      await load();
    } catch {
      setMsg('Submit failed');
    }
  };

  const approve = async (id: string) => {
    try {
      await updateAdmission(id, { status: 'APPROVED' });
      await load();
    } catch {
      setMsg('Status update failed');
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admissions</h1>
      <p className="text-sm text-teal-600">{msg}</p>
      <form onSubmit={create} className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
        <input value={form.studentName} onChange={(e) => setForm({ ...form, studentName: e.target.value })} className="border p-2 rounded" placeholder="Student Name" required />
        <input value={form.parentName} onChange={(e) => setForm({ ...form, parentName: e.target.value })} className="border p-2 rounded" placeholder="Parent Name" required />
        <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="border p-2 rounded" placeholder="Email" required type="email" />
        <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="border p-2 rounded" placeholder="Phone" required />
        <input value={form.schoolId} onChange={(e) => setForm({ ...form, schoolId: e.target.value })} className="border p-2 rounded" placeholder="School ID" required />
        <button type="submit" className="p-2 bg-blue-600 text-white rounded">Submit Admission</button>
      </form>

      <div className="space-y-2">
        {admissions.map((adm) => (
          <div key={adm.id} className="border p-3 rounded bg-white">
            <p className="font-medium">{adm.studentName} → {adm.status}</p>
            <p>{adm.parentName} • {new Date(adm.createdAt).toLocaleString()}</p>
            <button className="mt-2 px-3 py-1 bg-green-600 text-white rounded" onClick={() => approve(adm.id)}>Approve</button>
          </div>
        ))}
      </div>
    </main>
  );
}
