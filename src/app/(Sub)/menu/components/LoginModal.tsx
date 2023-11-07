import Image from 'next/image';

import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';

interface LoginModalProps {
  onClose: () => void;
}
export default function LoginModal({ onClose }: LoginModalProps) {
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_SERVER_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_SITE_URL}/api/users/login/oauth/kakao&response_type=code`;

  const handleLogin = () => {
    window.location.href = link;
  };

  return (
    <Modal onCloseOutside={onClose}>
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
        onClick={handleLogin}
      />
      <Spacing size={32} />
    </Modal>
  );
}
