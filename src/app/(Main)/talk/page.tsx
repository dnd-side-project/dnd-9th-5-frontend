import { Metadata } from 'next';

import TalkSection from './components/TalkSection';
import TitleSection from './components/TitleSection';
import { PageAnimation } from '@/components/PageAnimation';
import { Spacing } from '@/components/Spacing';

export const metadata: Metadata = {
  title: '포즈톡',
  description: '포즈톡에서 뽑은 랜덤 제시어로 나만의 개성있는 포즈를 완성해보세요.',
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
