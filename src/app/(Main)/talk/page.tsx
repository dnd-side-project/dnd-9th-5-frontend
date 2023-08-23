import { Spacing } from '@/components/Spacing';
import TalkSection from './components/TalkSection';
import TitleSection from './components/TitleSection';

export default function Talk() {
  return (
    <div>
      <Spacing size={30} />
      <TitleSection />
      <TalkSection />
    </div>
  );
}
