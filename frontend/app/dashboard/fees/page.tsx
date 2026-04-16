"use client";

import { useEffect, useState } from 'react';
import { getFeeStructures, createFeeStructure, getFeePayments, createFeePayment } from '../../lib/api';

type FeeStructure = { id: string; name: string; amount: number; classId: string };
type FeePayment = { id: string; studentId: string; amount: number; status: string; transactionId: string };

export default function FeesPage() {
  const [structures, setStructures] = useState<FeeStructure[]>([]);
  const [payments, setPayments] = useState<FeePayment[]>([]);
  const [structureForm, setStructureForm] = useState({ name: '', classId: '', amount: '' });
  const [paymentForm, setPaymentForm] = useState({ studentId: '', feeStructureId: '', amount: '', transactionId: '' });
  const [message, setMessage] = useState('');

  const loadData = async () => {
    try {
      const strRes = await getFeeStructures();
      setStructures(strRes.data);
      const payRes = await getFeePayments();
      setPayments(payRes.data);
    } catch {
      setMessage('Failed to load fee data.');
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const submitStructure = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createFeeStructure({
        ...structureForm,
        amount: Number(structureForm.amount),
        schoolId: window.localStorage.getItem('schoolId') || '',
      });
      setMessage('Fee structure created');
      setStructureForm({ name: '', classId: '', amount: '' });
      loadData();
    } catch {
      setMessage('Failed to create fee structure');
    }
  };

  const submitPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createFeePayment({
        ...paymentForm,
        amount: Number(paymentForm.amount),
        schoolId: window.localStorage.getItem('schoolId') || '',
      });
      setMessage('Payment recorded');
      setPaymentForm({ studentId: '', feeStructureId: '', amount: '', transactionId: '' });
      loadData();
    } catch {
      setMessage('Failed to record payment');
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Fees Management</h1>
      <p className="text-green-600 mb-4">{message}</p>
      <section className="mb-6">
        <h2 className="font-semibold mb-2">Create Fee Structure</h2>
        <form onSubmit={submitStructure} className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <input value={structureForm.name} onChange={(e) => setStructureForm({ ...structureForm, name: e.target.value })} placeholder="Name" className="border p-2 rounded" />
          <input value={structureForm.classId} onChange={(e) => setStructureForm({ ...structureForm, classId: e.target.value })} placeholder="Class ID" className="border p-2 rounded" />
          <input value={structureForm.amount} onChange={(e) => setStructureForm({ ...structureForm, amount: e.target.value })} placeholder="Amount" type="number" className="border p-2 rounded" />
          <button type="submit" className="bg-blue-600 text-white p-2 rounded">Create</button>
        </form>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold mb-2">Record Payment</h2>
        <form onSubmit={submitPayment} className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <input value={paymentForm.studentId} onChange={(e) => setPaymentForm({ ...paymentForm, studentId: e.target.value })} placeholder="Student ID" className="border p-2 rounded" />
          <input value={paymentForm.feeStructureId} onChange={(e) => setPaymentForm({ ...paymentForm, feeStructureId: e.target.value })} placeholder="FeeStructure ID" className="border p-2 rounded" />
          <input value={paymentForm.amount} onChange={(e) => setPaymentForm({ ...paymentForm, amount: e.target.value })} placeholder="Amount" type="number" className="border p-2 rounded" />
          <input value={paymentForm.transactionId} onChange={(e) => setPaymentForm({ ...paymentForm, transactionId: e.target.value })} placeholder="Transaction ID" className="border p-2 rounded" />
          <button type="submit" className="bg-green-600 text-white p-2 rounded md:col-span-4">Submit Payment</button>
        </form>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold mb-2">Fee Structures</h2>
        <ul className="space-y-2">
          {structures.map((fs) => (
            <li key={fs.id} className="border rounded p-2">{fs.name} - {fs.amount} ({fs.classId})</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-semibold mb-2">Payments</h2>
        <ul className="space-y-2">
          {payments.map((p) => (
            <li key={p.id} className="border rounded p-2">{p.studentId} paid {p.amount} ({p.status})</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
