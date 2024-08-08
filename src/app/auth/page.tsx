'use client';

import { redirect } from 'next/navigation';

import { AuthComponent } from './components';

interface AuthPageProps {
  searchParams: {
    code: string;
  };
}

export default function AuthPage({ searchParams: { code } }: AuthPageProps) {
  if (!code) redirect('/');
  return <AuthComponent code={code} />;
}
