import Image from 'next/image';
import Script from 'next/script';

import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import { kakaoInit, kakaoLogin } from '@/utils/kakaoLogin';

interface LoginModalProps {
  onClose: () => void;
}
export default function LoginModal({ onClose }: LoginModalProps) {
  return (
    <Modal onCloseOutside={onClose}>
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" onLoad={kakaoInit} />
      <Spacing size={32} />
      <h4>간편 로그인</h4>
      <Spacing size={8} />
      <p>
        로그인해야 북마크를 쓸 수 있어요.
        <br />
        카카오로 3초만에 가입할 수 있어요!
      </p>
      <Spacing size={16} />
      <Image
        src="/images/kakao-login.png"
        width={268}
        height={54}
        alt="kakao-login"
        className="cursor-pointer"
        onClick={kakaoLogin}
      />
      <Spacing size={32} />
    </Modal>
  );
}
