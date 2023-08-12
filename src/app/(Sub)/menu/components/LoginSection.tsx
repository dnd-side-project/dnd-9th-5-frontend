'use client';

import { Spacing } from '@/components/Spacing';

export default function LoginSection() {
  const handleLoginClick = () => {};

  return (
    <section className="flex h-88 items-center rounded-16 bg-card-ui px-20 py-24">
      <div className="h-40 w-40 rounded-full bg-white" />
      <Spacing size={16} direction="horizontal" />
      <p onClick={handleLoginClick}>로그인하기</p>
    </section>
  );
}
