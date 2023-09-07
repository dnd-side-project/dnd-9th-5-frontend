import TalkSection from './components/TalkSection';
import TitleSection from './components/TitleSection';
import { Spacing } from '@/components/Spacing';

export default function Talk() {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center">
        <TitleSection />
        <TalkSection />
      </div>
      <Spacing size={80} />
    </>
  );
}
