import { PrimaryButton } from '@/components/Button';
import { Popup } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import { PropsWithChildren } from 'react';

interface MenuModalProps extends PropsWithChildren {
  onConfirm?: () => void;
  onClose: () => void;
}

export default function MenuModal({ children, onConfirm, onClose }: MenuModalProps) {
  return (
    <Popup className="w-300">
      <Spacing size={20} />
      {children}
      <Spacing size={20} />
      <div className="flex w-full justify-evenly gap-8">
        <PrimaryButton type="secondary" onClick={onClose} text="취소" className="flex-1" />
        <PrimaryButton type="fill" onClick={onConfirm} text="확인" className="flex-1" />
      </div>
    </Popup>
  );
}
