import TalkSection from './components/TalkSection';
import TitleSection from './components/TitleSection';
import { Spacing } from '@/components/Spacing';

export default function Talk() {
  return (
    <div>
      <Spacing size={80} />
      <TitleSection />
      <TalkSection />
    </div>
  );
}
