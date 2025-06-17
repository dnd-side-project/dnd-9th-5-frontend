import MainLayout from '@/components/Layout/MainLayout';
import PoseTalkPage from '@/components/pages/PoseTalkPage';
import { COOKIE_IS_TOOLTIP_OPEN } from '@/constants';
import { getServerCookie } from '@/utils';

export default async function Talk() {
  const isToolTipOpen = (await getServerCookie(COOKIE_IS_TOOLTIP_OPEN)) === 'true';

  return (
    <MainLayout>
      <PoseTalkPage isTooltipOpen={isToolTipOpen} />
    </MainLayout>
  );
}
