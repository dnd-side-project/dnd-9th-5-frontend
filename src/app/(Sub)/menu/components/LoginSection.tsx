'use client';

import { Spacing } from '@/components/Spacing';

export default function LoginSection() {
  const handleLoginClick = () => {};

  return (
    <section className="py-12">
      <div className="bg-violet flex items-center rounded-16 bg-main-violet-bright px-20 py-24">
        <div className="h-40 w-40 rounded-full bg-black" />
        <Spacing size={16} direction="horizontal" />
        <p className="text-subtitle-1">dnd9_5_ozteam@kakao.com</p>
      </div>
    </section>
  );
}
