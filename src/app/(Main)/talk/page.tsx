import TalkSection from './TalkSection';
import TitleSection from './TitleSection';
import { PageAnimation } from '@/components/PageAnimation';

export default function Talk() {
  return (
    <PageAnimation className="flex flex-1 flex-col items-center justify-center">
      <TitleSection />
      <TalkSection />
    </PageAnimation>
  );
}
