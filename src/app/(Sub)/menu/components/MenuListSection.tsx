'use client';

import MenuModal from './InqueryModal';
import LogoutModal from './LogoutModal';
import { useOverlay } from '@/components/Overlay/useOverlay';

export default function MenuListSection() {
  const { open } = useOverlay();
  const handleInquiryClick = () => {
    open(({ exit }) => <MenuModal onClose={exit} />);
  };

  // const handleLogoutClick = () => {
  //   open(({ exit }) => <LogoutModal onClose={exit} />);
  // };

  return (
    <section className="flex flex-col">
      <button className="flex flex-col py-12" onClick={handleInquiryClick}>
        서비스 이용 문의
      </button>
      {/* <div className="flex flex-col py-12 text-tertiary" onClick={handleLogoutClick}>
        로그아웃
      </div> */}
    </section>
  );
}
