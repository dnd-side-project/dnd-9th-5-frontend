'use client';

import { patchLogout } from '@/apis';
import { menuList } from '@/constants/data';
import useUserState from '@/context/userState';

export default function MenuListSection() {
  const { isLogin, accessToken, clearUser } = useUserState();

  function handleLogout() {
    if (accessToken) {
      clearUser();
      patchLogout(accessToken, accessToken);
    }
  }

  function handleDeleteAccount() {
    clearUser();
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
          <div className="cursor-pointer py-12" onClick={() => handleLogout()}>
            <span id="subtitle-1">로그아웃</span>
          </div>
          <div className="cursor-pointer py-12" onClick={() => handleDeleteAccount()}>
            <span id="subtitle-1" className="text-tertiary">
              탈퇴하기
            </span>
          </div>
        </>
      )}
    </section>
  );
}
