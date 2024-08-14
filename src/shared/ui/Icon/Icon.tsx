import Image from 'next/image';

interface IconProps {
  icon: string;
  size?: number;
}

export default function Icon({ icon, size = 24 }: IconProps) {
  return <Image src={`/icons/${icon}.svg`} width={size} height={size} alt="icon" priority />;
}
