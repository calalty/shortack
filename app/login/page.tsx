'use client';

import { AuthLayout } from '@/layout/auth-layout/auth-layout';
import { signIn } from 'next-auth/react';

export default function SignIn() {
  return <AuthLayout title='Sign in to your account' />;
}
