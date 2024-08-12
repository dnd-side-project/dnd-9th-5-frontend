'use client';

import Link from 'next/link';

import LogoutModal from '@/components/Login/LogoutModal';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { ACCESS_TOKEN } from '@/constants';
import { menuList } from '@/constants/data';
import { getClientCookie } from '@/utils';

export default function MenuListSection() {
  const token = getClientCookie(ACCESS_TOKEN);
  const { open } = useOverlay();

  function handleLogout() {
    open(({ exit }) => <LogoutModal exit={exit} />);
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
      {token && (
        <>
          <div className="py-12 cursor-pointer" onClick={handleLogout}>
            <span id="subtitle-1">로그아웃</span>
          </div>
          <Link href={'/menu/withdraw'} className="py-12 cursor-pointer">
            <span id="subtitle-1" className="text-tertiary">
              탈퇴하기
            </span>
          </Link>
        </>
      )}
    </section>
  );
}
