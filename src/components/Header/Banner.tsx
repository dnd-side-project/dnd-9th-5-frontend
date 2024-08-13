import Image from 'next/image';

import { URL } from '@/constants';

export default function Banner() {
  return (
    <div className="flex h-62 items-center gap-10 bg-violet-50 p-10">
      <Image width={40} height={40} src="/images/app_icon.png" alt="" className="rounded-10" />
      <div className="flex-grow">
        <div id="subtitle-1">포즈피커 - 네컷사진 포즈추천</div>
        <div id="subtitle-3" className="text-brand">
          앱에서 더 많은 기능 이용하기
        </div>
      </div>
      <button
        className="rounded-30 bg-main-violet px-12 py-5 text-white"
        onClick={() => window.open(URL.appstore)}
      >
        열기
      </button>
    </div>
  );
}
