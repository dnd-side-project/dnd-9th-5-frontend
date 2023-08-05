import { Header } from '@/components/Header';
import './globals.css';
import '../../styles/font.css';
import '../../styles/typography.css';

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
    <html lang="ko">
      <body className="flex w-screen touch-none justify-center bg-slate-100 py-px">
        <div className="min-h-screen w-full max-w-440 bg-white drop-shadow-2xl">
          <Header />
          <div className="px-20 pt-116">{children}</div>
        </div>
      </body>
    </html>
  );
}
