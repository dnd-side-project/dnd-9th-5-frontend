'use client';

import { useRecoilValue } from 'recoil';

import LoginModal from './LoginModal';
import { Icon } from '@/components/Button/Icon';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { Spacing } from '@/components/Spacing';
import { ICON } from '@/constants/icon';
import { isLoginAtom, userAtom } from '@/context/userState';

function DefaultProfile() {
  return (
    <div className="rounded-full bg-white p-6">
      <Icon icon={ICON.profile} />
    </div>
  );
}

export default function LoginSection() {
  const { open, exit } = useOverlay();

  const isLogin = useRecoilValue(isLoginAtom);
  const userData = useRecoilValue(userAtom);

  return (
    <section className="py-12">
      {isLogin ? (
        <div className="bg-violet flex w-full items-center rounded-16 bg-main-violet-base px-20 py-24">
          <DefaultProfile />
          <Spacing size={16} direction="horizontal" />
          <span id="subtitle-1">{userData.email}</span>
        </div>
      ) : (
        <button
          className="bg-violet flex w-full items-center rounded-16 bg-main-violet-base px-20 py-24"
          onClick={() => open(() => <LoginModal onClose={exit} />)}
        >
          <DefaultProfile />
          <Spacing size={16} direction="horizontal" />
          <span id="subtitle-1">로그인하기</span>
        </button>
      )}
    </section>
  );
}
