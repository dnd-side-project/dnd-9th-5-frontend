import TalkSection from './components/TalkSection';
import TitleSection from './components/TitleSection';
import { Spacing } from '@/components/Spacing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '포즈톡',
};

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
