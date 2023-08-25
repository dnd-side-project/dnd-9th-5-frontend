import ModalWrapper from './PortalWrapper';
import { StrictPropsWithChildren } from '@/types';

interface PopupProps {
  className?: string;
}

export default function Popup({ className, children }: StrictPropsWithChildren<PopupProps>) {
  return (
    <ModalWrapper>
      <section
        className={`flex flex-col items-center rounded-16 bg-white px-16 py-12 ${className}`}
      >
        {children}
      </section>
    </ModalWrapper>
  );
}
