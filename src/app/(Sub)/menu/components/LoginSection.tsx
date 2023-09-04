'use client';

import { Spacing } from '@/components/Spacing';
import { IMAGE } from '@/constants/image';
import Image from 'next/image';

function DefaultProfile() {
  return (
    <div className="rounded-full bg-white p-6">
      <Image width={40} height={40} alt="🪄" src={IMAGE.profile_default} />
    </div>
  );
}

export default function LoginSection() {
  return (
    <section className="py-12">
      <div className="bg-violet flex items-center rounded-16 bg-main-violet-bright px-20 py-24">
        <DefaultProfile />
        <Spacing size={16} direction="horizontal" />
        <div id="subtitle-1">로그인하기</div>
      </div>
    </section>
  );
}
