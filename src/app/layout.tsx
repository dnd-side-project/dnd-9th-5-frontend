import './globals.css';
import '../../styles/font.css';
import '../../styles/typography.css';

import { Suspense } from 'react';

import { Analytics } from '@/components/Analytics';
import { OverlayProvider } from '@/components/Overlay/OverlayProvider';
import { BASE_SITE_URL } from '@/constants';
import QueryProvider from '@/provider/QueryProvider';
import RecoilContextProvider from '@/provider/RecoilContextProvider';

import type { Metadata } from 'next';

const DEFAULT_OG_TITLE = 'PosePicker';
const DEFAULT_OG_DESC = '다음 포즈 뭐하지? 포즈피커의 포즈 추천으로 포즈 고민을 해결해 드릴게요!';
const DEFAULT_OG_IMAGE = '/images/main_star.png';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_SITE_URL),
  title: {
    default: DEFAULT_OG_TITLE,
    template: `${DEFAULT_OG_TITLE} | %s`,
  },
  description: DEFAULT_OG_DESC,
  verification: {
    google: 'MB7qV_Oa4G4gR0jHgjtnE6S4g4blocE2mjo7z-z2f6Q',
  },
  other: {
    'naver-site-verification': '65f3aba9349cce28018ac7a97d4f87ff00709aa3',
  },
  openGraph: {
    title: DEFAULT_OG_TITLE,
    description: DEFAULT_OG_DESC,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: DEFAULT_OG_TITLE,
    description: DEFAULT_OG_DESC,
    images: [DEFAULT_OG_IMAGE],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: './favicon.ico',
  },
  manifest: '/manifest.json',
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="flex min-h-[100dvh] w-screen touch-none justify-center bg-slate-100 py-px">
        <div className="w-full max-w-440 overflow-hidden bg-white text-primary">
          <Suspense>
            <Analytics />
          </Suspense>
          <RecoilContextProvider>
            <QueryProvider>
              <OverlayProvider>{children}</OverlayProvider>
            </QueryProvider>
            <div id="portal" />
          </RecoilContextProvider>
        </div>
      </body>
    </html>
  );
}
