'use client';

import MenuModal from '@/components/Modal/MenuModal';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { Spacing } from '@/components/Spacing';
import { URL } from '@/constants/url';

const InquiryModalContent = () => <p>문의사항을 남기시겠습니까?</p>;
const LogoutModalContent = () => (
  <>
    <h4>로그아웃</h4>
    <Spacing size={8} />
    <p>로그아웃시 북마크를 쓸 수 없어요.</p>
    <p>정말 로그아웃하시겠어요?</p>
  </>
);

export default function MenuListSection() {
  const { open } = useOverlay();
  const handleInquiryClick = () => {
    open(({ exit }) => (
      <MenuModal onClose={exit} onConfirm={() => window.open(URL.inquiry)}>
        <InquiryModalContent />
      </MenuModal>
    ));
  };

  // const handleLogoutClick = () => {
  //   open(({ exit }) => (
  //     <MenuModal onClose={exit} onConfirm={() => console.log('로그아웃')}>
  //       <LogoutModalContent />
  //     </MenuModal>
  //   ));
  // };

  return (
    <section className="flex flex-col">
      <button className="flex flex-col py-12" onClick={handleInquiryClick}>
        서비스 이용 문의
      </button>
      <button className="flex flex-col py-12" onClick={() => window.open(URL.information)}>
        서비스 정보
      </button>
      {/* <button className="flex flex-col py-12 text-tertiary" onClick={handleLogoutClick}>
        로그아웃
      </button> */}
    </section>
  );
}
