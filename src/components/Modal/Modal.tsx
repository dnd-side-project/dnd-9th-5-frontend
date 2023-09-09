import ModalWrapper from './PortalWrapper';
import { StrictPropsWithChildren } from '@/types';

interface ModalProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  onCloseOutside?: () => void;
}

export default function Modal({
  className,
  children,
  onCloseOutside,
  ...props
}: StrictPropsWithChildren<ModalProps>) {
  return (
    <ModalWrapper onClick={onCloseOutside}>
      <section
        className={`flex flex-col items-center rounded-12 bg-white px-16 py-12 ${className}`}
        {...props}
      >
        {children}
      </section>
    </ModalWrapper>
  );
}
