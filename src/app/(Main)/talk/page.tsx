import { Metadata } from 'next';

import TalkSection from './components/TalkSection';
import TitleSection from './components/TitleSection';
import { PageAnimation } from '@/components/PageAnimation';
import { Spacing } from '@/components/Spacing';
import { META_STRING } from '@/constants/meta';

export const metadata: Metadata = {
  title: '포즈톡',
  description: META_STRING.description.talk,
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
