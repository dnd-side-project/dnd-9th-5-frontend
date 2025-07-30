import './globals.css';

import Analytics from '../components/Layout/Analytics';
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
      <head>
        <meta name="google-adsense-account" content="ca-pub-7559978289195926" />
      </head>
      <body className="flex w-screen touch-none justify-center bg-slate-100">
        <div className="w-full max-w-layout overflow-scroll bg-white text-primary">
          <Analytics />
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
