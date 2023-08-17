import Image from 'next/image';

interface Button {
  icon?: string;
  text: string;
  onClick: () => void;
  type?: 'fill' | 'outline';
}

const style = {
  fill: `bg-main-violet text-white`,
  outline: `border-1 border-main-violet text-main-violet bg-main-violet-base`,
};

export default function PrimaryButton({ icon, text, onClick, type = 'fill' }: Button) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center gap-8 rounded-12 px-24 py-14 ${style[type]}`}
    >
      {icon && <Image src={icon} alt={''} width={24} height={24} />}
      <div id="subtitle-1">{text}</div>
    </div>
  );
}
