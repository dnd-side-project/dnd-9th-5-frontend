import { Metadata } from 'next';

import TalkSection from './components/TalkSection';
import TitleSection from './components/TitleSection';
import { PageAnimation } from '@/components/PageAnimation';
import { Spacing } from '@/components/Spacing';

export const metadata: Metadata = {
  title: '포즈톡',
};

export default function Talk() {
  return (
    <>
      <PageAnimation className="flex flex-1 flex-col items-center justify-center">
        <TitleSection />
        <TalkSection />
      </PageAnimation>
      <Spacing size={80} />
    </>
  );
}
