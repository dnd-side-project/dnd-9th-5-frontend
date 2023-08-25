import ModalWrapper from './PortalWrapper';
import { StrictPropsWithChildren } from '@/types';

interface PopupProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  onCloseOutside?: () => void;
}

export default function Popup({
  className,
  children,
  onCloseOutside,
  ...props
}: StrictPropsWithChildren<PopupProps>) {
  return (
    <ModalWrapper onClick={onCloseOutside}>
      <section
        className={`flex flex-col items-center  bg-white px-16 py-12 ${className}`}
        {...props}
      >
        {children}
      </section>
    </ModalWrapper>
  );
}
