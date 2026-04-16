"use client";

import { useEffect, useState } from 'react';
import { getExams, createExam } from '../../lib/api';

type ExamType = {
  id: string;
  title: string;
  classId: string;
  sectionId?: string;
  subjectId: string;
  examDate: string;
  totalMarks: number;
  schoolId: string;
};

export default function ExamsPage() {
  const [exams, setExams] = useState<ExamType[]>([]);
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({ title: '', classId: '', sectionId: '', subjectId: '', examDate: '', totalMarks: 100 });

  const loadExams = async () => {
    try {
      const res = await getExams();
      setExams(res.data);
    } catch (err) {
      setMessage('Failed to fetch exams');
    }
  };

  useEffect(() => { loadExams(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const baseRequest = {
        ...form,
        schoolId: window.localStorage.getItem('schoolId') || '',
      };
      await createExam({ ...baseRequest, totalMarks: Number(form.totalMarks) });
      setMessage('Exam created successfully');
      setForm({ title: '', classId: '', sectionId: '', subjectId: '', examDate: '', totalMarks: 100 });
      loadExams();
    } catch {
      setMessage('Exam creation failed');
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Exams</h1>
      <p className="text-green-600 mb-4">{message}</p>

      <form onSubmit={handleSubmit} className="space-y-2 mb-4">
        <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Title" className="border p-2 rounded w-full" />
        <input value={form.classId} onChange={(e) => setForm({ ...form, classId: e.target.value })} placeholder="Class ID" className="border p-2 rounded w-full" />
        <input value={form.sectionId} onChange={(e) => setForm({ ...form, sectionId: e.target.value })} placeholder="Section ID (optional)" className="border p-2 rounded w-full" />
        <input value={form.subjectId} onChange={(e) => setForm({ ...form, subjectId: e.target.value })} placeholder="Subject ID" className="border p-2 rounded w-full" />
        <input value={form.examDate} onChange={(e) => setForm({ ...form, examDate: e.target.value })} type="date" className="border p-2 rounded w-full" />
        <input value={form.totalMarks} onChange={(e) => setForm({ ...form, totalMarks: Number(e.target.value) })} type="number" min={1} className="border p-2 rounded w-full" />
        <button className="bg-blue-600 text-white p-2 rounded">Create Exam</button>
      </form>

      <section>
        <h2 className="font-semibold mb-2">Existing Exams</h2>
        <ul className="space-y-2">
          {exams.map((exam) => (
            <li key={exam.id} className="border p-2 rounded">
              <div><strong>{exam.title}</strong> ({exam.examDate.split('T')[0]})</div>
              <div>Class: {exam.classId} Section: {exam.sectionId || 'N/A'}</div>
              <div>Subject: {exam.subjectId} Total Marks: {exam.totalMarks}</div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
