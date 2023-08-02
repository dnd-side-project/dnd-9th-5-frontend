import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PosePicker',
  description: '',
  openGraph: {
    title: 'PosePicker',
    description: '',
    url: '', // 웹사이트 URL
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
      <body className="flex h-[100dvh] w-screen justify-center bg-black bg-slate-50">
        <div className="relative h-full w-full max-w-450 overflow-y-scroll bg-white text-black">
          {children}
        </div>
      </body>
    </html>
  );
}
