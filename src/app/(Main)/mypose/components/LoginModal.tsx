import { AppleButton, KakaoButton } from './LoginButton';
import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import { KAKAO_AUTHORIZE } from '@/constants/env';

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTHORIZE;
  };

  return (
    <Modal onCloseOutside={onClose}>
      <div className="py-32">
        <h4>간편 로그인</h4>
        <Spacing size={8} />
        <p>
          로그인하면 북마크도 쓸 수 있어요!
          <br />
          간편 로그인으로 3초만에 가입해요.
        </p>
      </div>
      <div className="flex w-full flex-col gap-8 pb-16">
        <KakaoButton onClick={handleLogin} />
        <AppleButton onClick={() => alert('앱스토어 준비중입니다.')} />
      </div>
    </Modal>
  );
}
