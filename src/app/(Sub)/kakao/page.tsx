'use client';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return <div>로그인 중입니다 ..</div>;
}
