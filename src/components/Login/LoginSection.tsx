'use client';

import LoginModal from './LoginModal';
import LogoutModal from './LogoutModal';
import { Icon } from '@/components/Button/Icon';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { ICON } from '@/constants/icon';
import useUserState from '@/context/userState';

function DefaultProfile() {
  return (
    <div className="flex h-60 w-60 items-center justify-center rounded-full bg-border-default">
      <Icon icon={ICON.profile} size={33} />
    </div>
  );
}

export default function LoginSection() {
  const { open, exit } = useOverlay();
  const { isLogin, userData } = useUserState();

  return (
    <section className="h-108 py-24">
      <button
        className="flex w-full items-center gap-16"
        onClick={() =>
          isLogin
            ? open(({ exit }) => <LogoutModal exit={exit} />)
            : open(() => <LoginModal onClose={exit} />)
        }
      >
        <DefaultProfile />
        <div className="text-start">
          <div id="subtitle-1">{isLogin ? userData?.email : '회원가입 / 로그인'}</div>
          <div id="subtitle-3" className="text-tertiary">
            {isLogin
              ? `${userData?.nickname}님 환영합니다! 새 포즈를 등록해 보세요 :)`
              : '간편 로그인으로 3초만에 가입할 수 있어요.'}
          </div>
        </div>
      </button>
    </section>
  );
}
