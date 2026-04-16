"use client";

import { useEffect, useState } from 'react';
import { getStudents, createStudent, deleteStudent } from '../../lib/api';

type Student = {
  id: string;
  userId: string;
  schoolId: string;
  parentId?: string;
  classId?: string;
  sectionId?: string;
};

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [formData, setFormData] = useState({ userId: '', schoolId: '', parentId: '', classId: '', sectionId: '' });
  const [message, setMessage] = useState('');

  async function load() {
    try {
      const res = await getStudents();
      setStudents(res.data);
    } catch {
      setMessage('Failed to load students');
    }
  }

  useEffect(() => {
    load();
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createStudent({
        userId: formData.userId,
        schoolId: formData.schoolId,
        parentId: formData.parentId || undefined,
        classId: formData.classId || undefined,
        sectionId: formData.sectionId || undefined,
      });
      setMessage('Student created');
      setFormData({ userId: '', schoolId: '', parentId: '', classId: '', sectionId: '' });
      await load();
    } catch {
      setMessage('Create failed');
    }
  };

  const onDelete = async (id: string) => {
    try {
      await deleteStudent(id);
      setMessage('Student deleted');
      await load();
    } catch {
      setMessage('Delete failed');
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      <p className="text-sm text-green-600">{message}</p>
      <form onSubmit={onSubmit} className="mb-4 grid gap-3 md:grid-cols-3">
        <input value={formData.userId} onChange={(e) => setFormData({ ...formData, userId: e.target.value })} placeholder="User ID" className="p-2 border rounded" />
        <input value={formData.schoolId} onChange={(e) => setFormData({ ...formData, schoolId: e.target.value })} placeholder="School ID" className="p-2 border rounded" />
        <input value={formData.parentId} onChange={(e) => setFormData({ ...formData, parentId: e.target.value })} placeholder="Parent ID" className="p-2 border rounded" />
        <input value={formData.classId} onChange={(e) => setFormData({ ...formData, classId: e.target.value })} placeholder="Class ID" className="p-2 border rounded" />
        <input value={formData.sectionId} onChange={(e) => setFormData({ ...formData, sectionId: e.target.value })} placeholder="Section ID" className="p-2 border rounded" />
        <button type="submit" className="p-2 bg-blue-600 text-white rounded">Add Student</button>
      </form>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">User ID</th>
            <th className="border p-2">School ID</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="border p-2">{student.id}</td>
              <td className="border p-2">{student.userId}</td>
              <td className="border p-2">{student.schoolId}</td>
              <td className="border p-2">
                <button className="px-2 py-1 bg-rose-500 text-white rounded" onClick={() => onDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
