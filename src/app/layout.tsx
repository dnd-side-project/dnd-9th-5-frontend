import './globals.css';

import { Suspense } from 'react';

import { Analytics } from '@/components/Analytics';
import { OverlayProvider } from '@/components/Overlay/OverlayProvider';
import { META_STRING } from '@/constants/meta';
import QueryProvider from '@/provider/QueryProvider';
import RecoilProvider from '@/provider/RecoilProvider';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: `${META_STRING.title}`,
    template: `${META_STRING.title} | %s`,
  },
  description: META_STRING.description.main,
  verification: {
    google: META_STRING.verification.google,
  },
  other: {
    'naver-site-verification': META_STRING.verification.naver,
    'last-updated': '2023-11-08',
  },
  openGraph: {
    title: META_STRING.title,
    description: META_STRING.description.sub,
    images: [META_STRING.image.og],
  },
  twitter: {
    title: META_STRING.title,
    description: META_STRING.description.sub,
    images: [META_STRING.image.detail],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: META_STRING.favicon,
    apple: META_STRING.appleIcon,
  },
  manifest: '/manifest.json',
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="flex min-h-[100dvh] w-screen touch-none justify-center bg-slate-100 py-px">
        <div className="w-full max-w-440 overflow-scroll bg-white text-primary">
          <Suspense>
            <Analytics />
          </Suspense>
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
