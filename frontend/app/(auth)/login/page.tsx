"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { login } from '../../lib/api';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const [message, setMessage] = useState('');
  const { register: registerField, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormData) {
    try {
      const response = await login(values);
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      setMessage('Login successful');
    } catch (error: any) {
      setMessage(error?.response?.data?.message || 'Login failed');
    }
  }

  return (
    <main className="max-w-md mx-auto p-6 mt-14 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-5">School ERP Login</h1>
      {message ? <p className="mb-4 text-sm text-red-500">{message}</p> : null}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

        <button type="submit" disabled={isSubmitting} className="w-full p-2 bg-blue-600 text-white rounded">
          {isSubmitting ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </main>
  );
}
