import AppDownloadBanner from '../../components/Header/AppDownloadBanner';
import { StrictPropsWithChildren } from '@/types';
import { isIOS } from '@/utils';

interface MainFooterI extends StrictPropsWithChildren {
  grow?: boolean;
}

export function MainFooter({ children, grow = true }: MainFooterI) {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-30">
        <div className="mx-auto max-w-layout bg-white px-20 pb-24 pt-10">
          {grow ? (
            <div className="flex gap-8 [&>*]:grow">{children}</div>
          ) : (
            <div className="flex gap-8">{children}</div>
          )}
        </div>
        {isIOS() && <AppDownloadBanner />}
      </div>
      <div className="h-88" />
    </>
  );
}
