import { StrictPropsWithChildren } from '@/types';
import '../../styles/font.css';
import '../../styles/typography.css';
import './globals.css';

import QueryProvider from './QueryProvider';
import { OverlayProvider } from '@/components/Overlay/OverlayProvider';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PosePicker',
  description: 'PosePicker FE by @guesung, @seondal',
  openGraph: {
    title: 'PosePicker',
    description: 'PosePicker FE by @guesung, @seondal',
    url: 'https://pose-picker.vercel.app/', // 웹사이트 URL
    siteName: 'PosePicker',
    images: [
      {
        url: '', // 이미지 URL
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'ko-KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'PosePicker',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <QueryProvider>
        <OverlayProvider>{children}</OverlayProvider>
      </QueryProvider>
      <div id="loading" />
      <div id="portal" />
    </Layout>
  );
}

function Layout({ children }: StrictPropsWithChildren) {
  return (
    <html
      lang="ko"
      className="flex h-[100dvh] w-screen touch-none justify-center bg-slate-100 py-px"
    >
      <body className="h-full w-full max-w-440 bg-white text-primary drop-shadow-2xl">
        {children}
      </body>
    </html>
  );
}
