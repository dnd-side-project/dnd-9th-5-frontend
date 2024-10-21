import './globals.css';

import Script from 'next/script';

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
      <head>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.ADSENSE}`}
          crossOrigin="anonymous"
        ></Script>
      </head>
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
