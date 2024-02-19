'use client';

// import { useRecoilValue } from 'recoil';

import LoginModal from './LoginModal';
import { Icon } from '@/components/Button/Icon';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { ICON } from '@/constants/icon';
// import { isLoginAtom, userAtom } from '@/context/userState';

function DefaultProfile() {
  return (
    <div className="flex h-60 w-60 items-center justify-center rounded-full bg-border-default">
      <Icon icon={ICON.profile} size={33} />
    </div>
  );
}

export default function LoginSection() {
  const { open, exit } = useOverlay();

  // const isLogin = useRecoilValue(isLoginAtom);
  // const userData = useRecoilValue(userAtom);
  // console.log('🚀 ~ LoginSection ~ userData:', userData);

  return (
    <section className="py-24">
      <button className="flex gap-16" onClick={() => open(() => <LoginModal onClose={exit} />)}>
        <DefaultProfile />
        <div className="text-start">
          <div id="subtitle-1">회원가입 / 로그인</div>
          <div id="subtitle-2">간편 로그인으로 3초만에 가입할 수 있어요.</div>
        </div>
      </button>
    </section>
  );
}
