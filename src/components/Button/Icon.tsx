import Image from 'next/image';

interface IconProps {
  icon: string;
  size?: number;
}

export function Icon({ icon, size = 24 }: IconProps) {
  return <Image src={`/icons/${icon}.svg`} width={size} height={size} alt="icon" priority />;
}

interface IconButtonProps {
  icon: string;
  onClick?: () => void;
}

export function IconButton({ icon, onClick }: IconButtonProps) {
  return (
    <button className={'flex h-48 w-48 items-center justify-center'} onClick={onClick}>
      <Icon icon={icon} />
    </button>
  );
}
