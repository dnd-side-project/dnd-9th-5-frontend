'use client';

import { useOverlay } from '@/components/Overlay/useOverlay';
import MenuModal from './MenuModal';

export default function MenuListSection() {
  const { open } = useOverlay();
  const handleLogoutClick = () => {
    open(({ exit }) => <MenuModal onClose={exit} />);
  };

  return (
    <section className="flex flex-col">
      <div className="flex flex-col py-12" onClick={handleLogoutClick}>
        서비스 이용 문의
      </div>
      <div className="flex flex-col py-12 text-tertiary">로그아웃</div>
    </section>
  );
}
