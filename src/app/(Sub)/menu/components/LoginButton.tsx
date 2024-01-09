import { Icon } from '@/components/Button';

interface Button {
  onClick: () => void;
}

export function KakaoButton({ onClick }: Button) {
  return (
    <button
      className="flex w-full justify-center gap-8 rounded-12 bg-[#FEE500] py-14 text-[#191600]"
      onClick={onClick}
    >
      <Icon icon="kakao" size={20} />
      <span className="font-[500]">카카오 로그인</span>
    </button>
  );
}

export function AppleButton({ onClick }: Button) {
  return (
    <button
      className="flex w-full justify-center gap-4 rounded-12 bg-[#000] py-14 text-[#FFF]"
      onClick={onClick}
    >
      <Icon icon="apple" size={17} />
      <span className="font-[500]">Apple로 로그인</span>
    </button>
  );
}
