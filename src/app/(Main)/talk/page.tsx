import TalkWordSection from './TalkSection';
import TalkTitleSection from './TitleSection';
import { getServerCookie } from '@/utils';

export default async function Talk() {
  const isToolTipOpen = (await getServerCookie('tooltipIsOpen')) === 'true';

  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <TalkTitleSection isInitialToolTipOpen={isToolTipOpen} />
      <TalkWordSection />
    </div>
  );
}
