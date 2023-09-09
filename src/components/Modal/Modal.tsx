import ModalWrapper from './ModalWrapper';
import { StrictPropsWithChildren } from '@/types';
import cn from '@/utils/cn';

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
    <ModalWrapper onClose={onCloseOutside}>
      <section
        className={cn(
          'flex w-300 flex-col items-center rounded-16 bg-white px-16 text-center',
          className
        )}
        {...props}
      >
        {children}
      </section>
    </ModalWrapper>
  );
}
