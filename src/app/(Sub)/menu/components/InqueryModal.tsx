import Link from 'next/link';

import { Button } from '@/components/Button';
import { Popup } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';

interface MenuModalProps {
  onConfirm?: () => void;
  onClose: () => void;
}

export default function MenuModal({ onConfirm, onClose }: MenuModalProps) {
  return (
    <Popup>
      <Spacing size={20} />
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeZuPZTXnO4rZ4k39SzXv96PWAW4gLcTYBrsRUrgRHSVV9Ldg/viewform?usp=sf_link">
        문의사항을 남기시겠습니까?
      </Link>
      <Spacing size={20} />
      <div className="flex w-full justify-evenly gap-8">
        <Button className="bg-default" onClick={onClose}>
          취소
        </Button>
        <Button className="bg-main-violet text-white" onClick={onConfirm}>
          확인
        </Button>
      </div>
    </Popup>
  );
}
