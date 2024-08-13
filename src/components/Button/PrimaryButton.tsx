import { Icon } from './Icon';
import cn from '@/utils/cn';

interface ButtonProps {
  text: string;
  icon?: string;
  onClick?: () => void;
  type?: StyleType;
  className?: string;
}

type StyleType = 'fill' | 'outline' | 'secondary' | 'warning';

const styleMap: Record<StyleType, string> = {
  fill: `bg-main-violet text-white`,
  outline: `border-1 border-main-violet text-main-violet bg-main-violet-base`,
  secondary: `bg-sub-white text-secondary w-fit`,
  warning: `bg-warning text-white`,
};

export default function PrimaryButton({
  icon,
  text,
  onClick,
  type = 'fill',
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex h-60 items-center justify-center gap-8 rounded-12 px-24 transition-all active:scale-95',
        styleMap[type],
        className
      )}
    >
      {icon && <Icon icon={icon} />}
      <span id="subtitle-1">{text}</span>
    </button>
  );
}
