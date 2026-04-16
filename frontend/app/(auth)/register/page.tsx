"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { register as registerSchool } from '../../lib/api';

const schema = z.object({
  schoolName: z.string().min(2),
  schoolDomain: z.string().min(2),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  roleId: z.string().default('ADMIN'),
});

type FormData = z.infer<typeof schema>;

export default function RegisterPage() {
  const [message, setMessage] = useState('');
  const { register: registerField, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: { roleId: 'ADMIN' } });

  async function onSubmit(values: FormData) {
    try {
      await registerSchool(values);
      setMessage('School registered successfully. Please login.');
    } catch (error: any) {
      setMessage(error?.response?.data?.message || 'Registration failed');
    }
  }

  return (
    <main className="max-w-xl mx-auto p-6 mt-14 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-5">Register School + Admin</h1>
      {message ? <p className="mb-4 text-sm text-green-600">{message}</p> : null}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="block">
            <span>School Name</span>
            <input className="w-full p-2 border rounded" type="text" {...registerField('schoolName')} />
            <small className="text-red-500">{errors.schoolName?.message}</small>
          </label>
          <label className="block">
            <span>School Domain</span>
            <input className="w-full p-2 border rounded" type="text" {...registerField('schoolDomain')} />
            <small className="text-red-500">{errors.schoolDomain?.message}</small>
          </label>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="block">
            <span>First Name</span>
            <input className="w-full p-2 border rounded" type="text" {...registerField('firstName')} />
            <small className="text-red-500">{errors.firstName?.message}</small>
          </label>
          <label className="block">
            <span>Last Name</span>
            <input className="w-full p-2 border rounded" type="text" {...registerField('lastName')} />
            <small className="text-red-500">{errors.lastName?.message}</small>
          </label>
        </div>

        <label className="block">
          <span>Email</span>
          <input className="w-full p-2 border rounded" type="email" {...registerField('email')} />
          <small className="text-red-500">{errors.email?.message}</small>
        </label>

        <label className="block">
          <span>Password</span>
          <input className="w-full p-2 border rounded" type="password" {...registerField('password')} />
          <small className="text-red-500">{errors.password?.message}</small>
        </label>

        <button type="submit" disabled={isSubmitting} className="w-full p-2 bg-green-600 text-white rounded">
          {isSubmitting ? 'Registering...' : 'Register School'}
        </button>
      </form>
    </main>
  );
}
