"use client";

import { useEffect, useState } from 'react';
import { getTeachers, getTeacherAssignments, assignTeacherSubject, getTeacherLeaves, requestTeacherLeave, updateTeacherLeave } from '../../lib/api';

type TeacherType = { id: string; userId: string; schoolId: string; user?: { firstName: string; lastName: string } };
type AssignmentType = { id: string; teacher: { user: { firstName: string; lastName: string } }; subject: { name: string }; class: { name: string }; section?: { name: string } };
type LeaveType = { id: string; teacher: { user: { firstName: string; lastName: string } }; fromDate: string; toDate: string; reason: string; status: string };

export default function TeachersPage() {
  const [teachers, setTeachers] = useState<TeacherType[]>([]);
  const [assignments, setAssignments] = useState<AssignmentType[]>([]);
  const [leaves, setLeaves] = useState<LeaveType[]>([]);
  const [message, setMessage] = useState('');

  const [assignmentForm, setAssignmentForm] = useState({ teacherId: '', subjectId: '', classId: '', sectionId: '' });
  const [leaveForm, setLeaveForm] = useState({ teacherId: '', fromDate: '', toDate: '', reason: '' });

  const loadAll = async () => {
    try {
      const [t, a, l] = await Promise.all([getTeachers(), getTeacherAssignments(), getTeacherLeaves()]);
      setTeachers(t.data);
      setAssignments(a.data);
      setLeaves(l.data);
    } catch {
      setMessage('Failed to load teacher data.');
    }
  };

  useEffect(() => { loadAll(); }, []);

  const createAssignment = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await assignTeacherSubject({ ...assignmentForm, schoolId: window.localStorage.getItem('schoolId') || '' });
      setMessage('Teacher assigned successfully');
      setAssignmentForm({ teacherId: '', subjectId: '', classId: '', sectionId: '' });
      loadAll();
    } catch {
      setMessage('Failed to assign teacher.');
    }
  };

  const createLeave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await requestTeacherLeave({ ...leaveForm, schoolId: window.localStorage.getItem('schoolId') || '' });
      setMessage('Leave request submitted');
      setLeaveForm({ teacherId: '', fromDate: '', toDate: '', reason: '' });
      loadAll();
    } catch {
      setMessage('Leave request failed');
    }
  };

  const changeLeaveStatus = async (id: string, status: string) => {
    try {
      await updateTeacherLeave(id, { status });
      setMessage('Leave status updated');
      loadAll();
    } catch {
      setMessage('Failed to update leave status');
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Teachers</h1>
      <p className="text-green-600 mb-4">{message}</p>

      <section className="mb-6">
        <h2 className="font-semibold mb-2">Create Subject Assignment</h2>
        <form onSubmit={createAssignment} className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-3">
          <input value={assignmentForm.teacherId} onChange={(e) => setAssignmentForm({ ...assignmentForm, teacherId: e.target.value })} placeholder="Teacher ID" className="border p-2 rounded" />
          <input value={assignmentForm.subjectId} onChange={(e) => setAssignmentForm({ ...assignmentForm, subjectId: e.target.value })} placeholder="Subject ID" className="border p-2 rounded" />
          <input value={assignmentForm.classId} onChange={(e) => setAssignmentForm({ ...assignmentForm, classId: e.target.value })} placeholder="Class ID" className="border p-2 rounded" />
          <input value={assignmentForm.sectionId} onChange={(e) => setAssignmentForm({ ...assignmentForm, sectionId: e.target.value })} placeholder="Section ID" className="border p-2 rounded" />
          <button className="col-span-full bg-blue-600 text-white p-2 rounded">Assign</button>
        </form>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold mb-2">Request Leave</h2>
        <form onSubmit={createLeave} className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-3">
          <input value={leaveForm.teacherId} onChange={(e) => setLeaveForm({ ...leaveForm, teacherId: e.target.value })} placeholder="Teacher ID" className="border p-2 rounded" />
          <input value={leaveForm.fromDate} onChange={(e) => setLeaveForm({ ...leaveForm, fromDate: e.target.value })} type="date" className="border p-2 rounded" />
          <input value={leaveForm.toDate} onChange={(e) => setLeaveForm({ ...leaveForm, toDate: e.target.value })} type="date" className="border p-2 rounded" />
          <input value={leaveForm.reason} onChange={(e) => setLeaveForm({ ...leaveForm, reason: e.target.value })} placeholder="Reason" className="border p-2 rounded" />
          <button className="col-span-full bg-teal-600 text-white p-2 rounded">Submit Leave</button>
        </form>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold">Active Teachers</h2>
        <ul className="space-y-2 mt-2">
          {teachers.map((teacher) => (
            <li key={teacher.id} className="border p-2 rounded">{teacher.user?.firstName} {teacher.user?.lastName} (ID: {teacher.id})</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold">Assignments</h2>
        <ul className="space-y-2 mt-2">
          {assignments.map((a) => (
            <li key={a.id} className="border p-2 rounded">{a.teacher.user.firstName} {a.teacher.user.lastName} - {a.subject.name} ({a.class.name}) Section: {a.section?.name || 'N/A'}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-semibold">Leave Requests</h2>
        <ul className="space-y-2 mt-2">
          {leaves.map((leave) => (
            <li key={leave.id} className="border p-2 rounded">
              {leave.teacher.user.firstName} {leave.teacher.user.lastName} {leave.fromDate.split('T')[0]} to {leave.toDate.split('T')[0]} - {leave.status}
              <div className="space-x-2 mt-1">
                <button onClick={() => changeLeaveStatus(leave.id, 'APPROVED')} className="bg-green-600 text-white px-2 py-1 rounded">Approve</button>
                <button onClick={() => changeLeaveStatus(leave.id, 'REJECTED')} className="bg-red-600 text-white px-2 py-1 rounded">Reject</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
