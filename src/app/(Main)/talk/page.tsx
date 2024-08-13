import TalkSection from './TalkSection';
import TitleSection from './TitleSection';
import { PageAnimation } from '@/components/PageAnimation';
import { getServerCookie } from '@/utils';

export default async function Talk() {
  const isToolTipOpen = (await getServerCookie('tooltipIsOpen')) === 'true';

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <TitleSection isInitialToolTipOpen={isToolTipOpen} />
      <TalkSection />
    </div>
  );
}
