'use client';

import LoginModal from './LoginModal';
import { Icon } from '@/components/Button/Icon';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { ACCESS_TOKEN, EMAIL, NICKNAME } from '@/constants';
import { ICON } from '@/constants/icon';
import { getClientCookie } from '@/utils';

export default function LoginSection() {
  const { open, exit } = useOverlay();
  const token = getClientCookie(ACCESS_TOKEN);
  const email = getClientCookie(EMAIL);
  const nickname = getClientCookie(NICKNAME);

  return (
    <section className="h-108 py-24">
      <div
        className="flex w-full items-center gap-16"
        onClick={() => !token && open(() => <LoginModal onClose={exit} />)}
      >
        <div className="flex h-60 w-60 items-center justify-center rounded-full bg-border-default">
          <Icon icon={ICON.profile} size={33} />
        </div>
        <div className="text-start">
          <div id="subtitle-1">{token ? email : '회원가입 / 로그인'}</div>
          <div id="subtitle-3" className="text-tertiary">
            {token
              ? `${nickname}님 환영합니다! 새 포즈를 등록해 보세요 :)`
              : '간편 로그인으로 3초만에 가입할 수 있어요.'}
          </div>
        </div>
      </div>
    </section>
  );
}
