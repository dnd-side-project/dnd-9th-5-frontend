import './globals.css';

import { Suspense } from 'react';

import { JsonLD } from '@/components';
import { Analytics } from '@/components/Analytics';
import { OverlayProvider } from '@/components/Overlay/OverlayProvider';
import METADATA from '@/constants/meta';
import QueryProvider from '@/provider/QueryProvider';
import RecoilProvider from '@/provider/RecoilProvider';

import type { Metadata } from 'next';

export const metadata: Metadata = METADATA;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="flex justify-center w-screen touch-none bg-slate-100">
        <div className="w-full overflow-scroll bg-white max-w-440 text-primary">
          <Suspense>
            <Analytics />
          </Suspense>
          <JsonLD />
          <QueryProvider>
            <RecoilProvider>
              <OverlayProvider>{children}</OverlayProvider>
            </RecoilProvider>
          </QueryProvider>
          <div id="portal" />
        </div>
      </body>
    </html>
  );
}
