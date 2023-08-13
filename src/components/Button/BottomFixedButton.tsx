import Button, { type ButtonProps } from './Button';
import BottomFixedDiv from '../BottomFixedDiv';

export default function BottomFixedButton({ children, ...props }: ButtonProps) {
  return (
    <BottomFixedDiv>
      <Button {...props}>{children}</Button>
    </BottomFixedDiv>
  );
}
