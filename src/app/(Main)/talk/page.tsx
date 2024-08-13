import TalkWordSection from './TalkSection';
import TalkTitleSection from './TitleSection';
import { COOKIE_IS_TOOLTIP_OPEN } from '@/constants';
import { getServerCookie } from '@/utils';

export default async function Talk() {
  const isToolTipOpen = (await getServerCookie(COOKIE_IS_TOOLTIP_OPEN)) === 'true';

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <TalkTitleSection isInitialToolTipOpen={isToolTipOpen} />
      <TalkWordSection />
    </div>
  );
}
