import AppDownloadBanner from '../Header/AppDownloadBanner';
import { StrictPropsWithChildren } from '@/types';
import { isIOS } from '@/utils';

export function BottomFixedDiv({ children }: StrictPropsWithChildren) {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-30">
        <div className="px-20 pt-10 pb-24 mx-auto bg-white max-w-layout">
          <div className="flex gap-8 [&>*]:flex-1 [&>*]:grow">{children}</div>
        </div>
        {isIOS() && <AppDownloadBanner />}
      </div>
      <div className="h-88" />
    </>
  );
}
