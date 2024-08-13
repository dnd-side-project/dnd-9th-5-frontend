import './globals.css';

import Analytics from './Analytics';
import JsonLD from './JsonLD';
import { OverlayProvider } from '@/components/Overlay/OverlayProvider';
import { METADATA } from '@/constants';
import QueryProvider from '@/provider/QueryProvider';
import RecoilProvider from '@/provider/RecoilProvider';

import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = METADATA;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body className="flex justify-center w-screen touch-none bg-slate-100">
        <div className="w-full overflow-scroll bg-white max-w-layout text-primary">
          <Analytics />
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
