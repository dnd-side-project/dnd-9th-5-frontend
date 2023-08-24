import Button, { type ButtonProps } from './Button';
import BottomFixedDiv from '../BottomFixedDiv';

import type { StrictPropsWithChildren } from '@/types';

export default function BottomFixedButton({
  children,
  ...props
}: StrictPropsWithChildren<ButtonProps>) {
  return (
    <BottomFixedDiv>
      <Button {...props}>{children}</Button>
    </BottomFixedDiv>
  );
}
