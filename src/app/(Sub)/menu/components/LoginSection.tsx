'use client';

import LoginModal from './LoginModal';
import { Icon } from '@/components/Button/Icon';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { Spacing } from '@/components/Spacing';
import { ICON } from '@/constants/icon';

function DefaultProfile() {
  return (
    <div className="rounded-full bg-white p-6">
      <Icon icon={ICON.profile} />
    </div>
  );
}

export default function LoginSection() {
  const { open, exit } = useOverlay();

  return (
    <section className="py-12">
      <div className="bg-violet flex items-center rounded-16 bg-main-violet-base px-20 py-24">
        <DefaultProfile />
        <Spacing size={16} direction="horizontal" />
        <div id="subtitle-1" onClick={() => open(() => <LoginModal onClose={exit} />)}>
          로그인하기
        </div>
      </div>
    </section>
  );
}
