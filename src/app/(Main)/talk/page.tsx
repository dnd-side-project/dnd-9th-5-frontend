import TalkSection from './TalkSection';
import TitleSection from './TitleSection';
import { PageAnimation } from '@/components/PageAnimation';

export default function Talk() {
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <TitleSection />
      <TalkSection />
    </div>
  );
}
