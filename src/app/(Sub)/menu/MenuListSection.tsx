'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { PrimaryButton } from '@/components/Button';
import { Popup } from '@/components/Modal';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { menuList } from '@/constants/data';
import useUserState from '@/context/userState';

export default function MenuListSection() {
  const { isLogin } = useUserState();
  const { open } = useOverlay();
  const router = useRouter();

  function handleLogout() {
    open(({ exit }) => (
      <Popup
        title="로그아웃"
        content={`북마크는 로그인 시에만 유지되어요.\n정말 로그아웃하시겠어요?`}
      >
        <>
          <PrimaryButton
            text={'로그아웃'}
            type="secondary"
            onClick={() => router.replace('/auth/logout')}
          />
          <PrimaryButton text="로그인 유지" onClick={exit} />
        </>
      </Popup>
    ));
  }

  return (
    <section className="flex flex-col">
      {menuList.map((item, idx) =>
        item.text ? (
          <div
            key={idx}
            className={`cursor-pointer py-12 ${'highlight' in item && 'text-main-violet'}`}
            onClick={() => window.open(item.link)}
          >
            <span id="subtitle-1">{item.text}</span>
          </div>
        ) : (
          <div key={idx} className="py-12" />
        )
      )}
      {isLogin && (
        <>
          <div className="cursor-pointer py-12" onClick={handleLogout}>
            <span id="subtitle-1">로그아웃</span>
          </div>
          <Link href={'/menu/withdraw'} className="cursor-pointer py-12">
            <span id="subtitle-1" className="text-tertiary">
              탈퇴하기
            </span>
          </Link>
        </>
      )}
    </section>
  );
}
