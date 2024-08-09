'use client';

import LoginModal from './LoginModal';
import { Icon } from '@/components/Button/Icon';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { ACCESS_TOKEN } from '@/constants';
import { ICON } from '@/constants/icon';
import { getClientCookie } from '@/utils';


export default function LoginSection() {
  const { open, exit } = useOverlay();
  const token = getClientCookie(ACCESS_TOKEN);

  return (
    <section className="py-24 h-108">
      <div
        className="flex items-center w-full gap-16"
        onClick={() => !token && open(() => <LoginModal onClose={exit} />)}
      >
        <div className="flex items-center justify-center rounded-full h-60 w-60 bg-border-default">
          <Icon icon={ICON.profile} size={33} />
        </div>
        <div className="text-start">
          <div id="subtitle-1">{token ? userData?.email : '회원가입 / 로그인'}</div>
          <div id="subtitle-3" className="text-tertiary">
            {token
              ? `${userData?.nickname}님 환영합니다! 새 포즈를 등록해 보세요 :)`
              : '간편 로그인으로 3초만에 가입할 수 있어요.'}
          </div>
        </div>
      </div>
    </section>
  );
}
