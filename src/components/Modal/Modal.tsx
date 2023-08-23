import ModalWrapper from './PortalWrapper';
import { StrictPropsWithChildren } from '@/types';

interface PopupProps {
  className?: string;
}

export default function Popup({ children }: StrictPropsWithChildren<PopupProps>) {
  return (
    <ModalWrapper>
      <section className="flex w-300 flex-col items-center  rounded-16 bg-white px-16 py-12">
        {children}
      </section>
    </ModalWrapper>
  );
}
