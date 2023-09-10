import type { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  id: string;
}

export default function Icon({ id, width = 24, height = 24, fill = 'none', ...rest }: IconProps) {
  return (
    <svg width={width} height={height} fill={fill} {...rest}>
      <use href={`/sprite/sprite.svg#${id}`} />
    </svg>
  );
}
