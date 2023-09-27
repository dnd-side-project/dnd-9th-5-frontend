'use client';

import { Icon } from '@/components/Icon';
import { PreparingModal } from '@/components/Modal';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { Spacing } from '@/components/Spacing';

function DefaultProfile() {
  return (
    <div className="rounded-full bg-white p-6">
      <Icon id="profile_default" />
    </div>
  );
}

export default function LoginSection() {
  const { open } = useOverlay();

  return (
    <section className="py-12">
      <div
        className="bg-violet flex items-center rounded-16 bg-main-violet-bright px-20 py-24"
        onClick={() => open(({ exit }) => <PreparingModal onClose={exit} />)}
      >
        <DefaultProfile />
        <Spacing size={16} direction="horizontal" />
        <div id="subtitle-1">로그인하기</div>
      </div>
    </section>
  );
}
