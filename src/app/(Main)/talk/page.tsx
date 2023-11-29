import { MainHeader } from '@/components/Header';
import TalkSection from './components/TalkSection';
import TitleSection from './components/TitleSection';
import { PageAnimation } from '@/components/PageAnimation';
import { Spacing } from '@/components/Spacing';

export default function Talk() {
  return (
    <>
      <MainHeader />
      <PageAnimation className="flex flex-1 flex-col items-center justify-center">
        <TitleSection />
        <TalkSection />
      </PageAnimation>
      <Spacing size={80} />
    </>
  );
}
