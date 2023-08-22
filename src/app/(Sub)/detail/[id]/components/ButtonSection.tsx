import BottomFixedDiv from '@/components/BottomFixedDiv';
import { Button } from '@/components/Button';

export default function ButtonSection() {
  return (
    <BottomFixedDiv className="flex">
      <Button className="">링크 공유</Button>
      <Button>카카오 공유</Button>
    </BottomFixedDiv>
  );
}
