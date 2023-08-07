import { Spacing } from '@/components/Spacing';
import TalkSection from './components/TalkSection';
import TitleSection from './components/TitleSection';

export default function Talk() {
  return (
    <>
      <Spacing size={100} />
      <TitleSection />
      <TalkSection />
    </>
  );
}
