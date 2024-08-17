import './globals.css';

import Script from 'next/script';
import { Suspense } from 'react';

import { OverlayProvider } from '@/components/Overlay/OverlayProvider';
import { GA_ID } from '@/constants/env';
import METADATA from '@/constants/meta';
import QueryProvider from '@/provider/QueryProvider';
import RecoilProvider from '@/provider/RecoilProvider';

import type { Metadata } from 'next';

export const metadata: Metadata = METADATA;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive" // after page is interactive
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className="flex w-screen touch-none justify-center bg-slate-100">
        <div className="w-full max-w-440 overflow-scroll bg-white text-primary">
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
