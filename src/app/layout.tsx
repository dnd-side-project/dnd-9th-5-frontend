import './globals.css';
import '../../styles/font.css';
import '../../styles/typography.css';

import { OverlayProvider } from '@/components/Overlay/OverlayProvider';
import QueryProvider from '@/provider/QueryProvider';
import RecoilContextProvider from '@/provider/RecoilContextProvider';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PosePicker',
  description: '포토부스에서 고민하는 당신을 위한 포즈 추천',
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
    <html lang="ko">
      <body className="flex min-h-[100vh] w-screen touch-none justify-center bg-slate-100 py-px">
        <RecoilContextProvider>
          <div className="w-full max-w-440 bg-white text-primary drop-shadow-2xl">
            <QueryProvider>
              <OverlayProvider>{children}</OverlayProvider>
            </QueryProvider>
            <div id="portal" />
          </div>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
