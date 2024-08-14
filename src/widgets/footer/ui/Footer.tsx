import AppDownloadBanner from './AppDownloadBanner';
import { StrictPropsWithChildren, isIOS } from '@/shared';

export default function Header({ children }: StrictPropsWithChildren) {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-30">
        <div className="mx-auto max-w-layout bg-white px-20 pb-24 pt-10">
          <div className="flex gap-8 [&>*]:flex-1 [&>*]:grow">{children}</div>
        </div>
        {isIOS() && <AppDownloadBanner />}
      </div>
      <div className="h-88" />
    </>
  );
}
