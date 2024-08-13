import './globals.css';

import Analytics from './Analytics';
import JsonLD from './JsonLD';
import { OverlayProvider } from '@/components/Overlay/OverlayProvider';
import METADATA from '@/constants/meta';
import QueryProvider from '@/provider/QueryProvider';
import RecoilProvider from '@/provider/RecoilProvider';

import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = METADATA;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body className="flex w-screen touch-none justify-center bg-slate-100">
        <div className="w-full max-w-layout overflow-scroll bg-white text-primary">
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
