'use client';

import { redirect } from 'next/navigation';

import AuthComponent from './AuthComponent';

interface AuthPageProps {
  searchParams: {
    code: string;
  };
}

export default function AuthPage({ searchParams: { code } }: AuthPageProps) {
  if (!code) redirect('/');
  return <AuthComponent code={code} />;
}
