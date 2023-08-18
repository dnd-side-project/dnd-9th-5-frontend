import TalkSection from './components/TalkSection';
import TitleSection from './components/TitleSection';
import { Spacing } from '@/components/Spacing';

export default function Talk() {
  return (
    <>
      <Spacing size={100} />
      <TitleSection />
      <TalkSection />
    </>
  );
}
