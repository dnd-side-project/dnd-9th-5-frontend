import BottomFixedDiv from '../BottomFixedDiv';
import Button, { type ButtonProps } from './Button';

export default function BottomFixedButton({ ...props }: ButtonProps) {
  return (
    <BottomFixedDiv>
      <Button {...props} />
    </BottomFixedDiv>
  );
}
