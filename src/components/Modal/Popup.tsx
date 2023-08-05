import { StrictPropsWithChildren } from '@/types';
import ModalWrapper from './ModalWrapper';

interface ModalProps extends StrictPropsWithChildren {
  isOpen: boolean;
}
export default function Popup({ isOpen, children }: ModalProps) {
  return (
    <ModalWrapper isOpen={isOpen}>
      <section className="flex w-280 flex-col items-center rounded-16 bg-white px-16 py-12">
        {children}
      </section>
    </ModalWrapper>
  );
}
