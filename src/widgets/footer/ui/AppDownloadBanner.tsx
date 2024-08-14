import Image from 'next/image';
import Link from 'next/link';

export default function AppDownloadBanner() {
  return (
    <div className="flex items-center gap-10 bg-violet-50 p-10">
      <Image
        width={40}
        height={40}
        src="/images/app_icon.png"
        alt="main icon"
        className="rounded-10"
      />
      <div className="flex-grow">
        <div id="subtitle-1">포즈피커 - 네컷사진 포즈추천</div>
        <div id="subtitle-3" className="text-brand">
          앱에서 더 많은 기능 이용하기
        </div>
      </div>
      <Link href={URL.appstore} className="rounded-30 bg-main-violet px-12 py-5 text-white">
        열기
      </Link>
    </div>
  );
}
