import { Icon } from './Icon';

interface Button {
  icon?: string;
  text: string;
  onClick?: () => void;
  type?: keyof Style;
  className?: string;
}

interface Style {
  fill: string;
  outline: string;
  secondary: string;
}
const style: Style = {
  fill: `bg-main-violet text-white`,
  outline: `border-1 border-main-violet text-main-violet bg-main-violet-base`,
  secondary: `bg-sub-white text-secondary w-fit`,
};

export default function PrimaryButton({ icon, text, onClick, type = 'fill', className }: Button) {
  return (
    <button
      onClick={onClick}
      className={`flex h-60 items-center justify-center gap-8 rounded-12 px-24 transition-all active:scale-95 ${style[type]} ${className}`}
    >
      {icon && <Icon icon={icon} />}
      <div id="subtitle-1">{text}</div>
    </button>
  );
}
