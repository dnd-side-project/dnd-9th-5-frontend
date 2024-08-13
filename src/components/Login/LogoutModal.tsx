'use client';

import { useRouter } from 'next/navigation';

import { PrimaryButton } from '@/components/Button';
import { Popup } from '@/components/Modal';
import { ACCESS_TOKEN } from '@/constants';
import { removeClientCookie } from '@/utils';

export default function LogoutModal({ exit }: { exit(): void }) {
  const router = useRouter();
  const handleLogout = () => {
    removeClientCookie(ACCESS_TOKEN);
    router.push('/');
  };

  return (
    <Popup
      title="로그아웃"
      content={`북마크는 로그인 시에만 유지되어요.\n정말 로그아웃하시겠어요?`}
    >
      <PrimaryButton text="로그아웃" variant="secondary" onClick={handleLogout} />
      <PrimaryButton text="로그인 유지" onClick={exit} />
    </Popup>
  );
}
