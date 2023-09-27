'use client';

import Script from 'next/script';

import { Icon } from '@/components/Icon';
import { Spacing } from '@/components/Spacing';
import { kakaoInit, kakaoLogin } from '@/utils/kakaoLogin';

function DefaultProfile() {
  return (
    <div className="rounded-full bg-white p-6">
      <Icon id="profile_default" />
    </div>
  );
}

export default function LoginSection() {
  return (
    <section className="py-12">
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" onLoad={kakaoInit} />
      <div className="bg-violet flex items-center rounded-16 bg-main-violet-bright px-20 py-24">
        <DefaultProfile />
        <Spacing size={16} direction="horizontal" />
        <div id="subtitle-1" onClick={kakaoLogin}>
          로그인하기
        </div>
      </div>
    </section>
  );
}
