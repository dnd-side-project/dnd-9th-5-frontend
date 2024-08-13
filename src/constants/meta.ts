import { Metadata } from 'next';

const META_STRING = {
  title: 'PosePicker | 포즈피커',
  description: {
    main: '포토부스에서 고민하는 당신을 위한 포즈 추천 서비스',
    sub: '포즈가 고민될 땐? 포즈피커!',
    // pick: '시간 없을 땐 포즈픽으로 빠르게 랜덤 포즈를 추천받아보세요.',
    // talk: '포즈톡에서 뽑은 랜덤 제시어로 나만의 개성있는 포즈를 완성해보세요.',
    // feed: '포즈피드에서 조건에 맞는 포즈를 찾고, 친구한테 공유해보세요',
  },
  image: {
    main: '/meta/og_main.png',
    detail: '/meta/og_detail.png',
    kakao_share: 'https://www.posepicker.site/meta/og_kakao.png',
  },
  favicon: '/meta/favicon.ico',
  appleIcon: '/pwa-icons/apple.png',
  verification: {
    google: 'MB7qV_Oa4G4gR0jHgjtnE6S4g4blocE2mjo7z-z2f6Q',
    naver: 'eb9f471cae26de34e6bc71849e73f04cb8b00d83',
  },
};

export const OPEN_GRAPH = {
  detail: {
    title: META_STRING.title,
    description: '이 포즈는 어때요?',
    image: META_STRING.image.detail,
  },
  kakao_share: {
    title: '이 포즈는 어때요?',
    description: META_STRING.description.sub,
    button: '포즈 확인하기',
    imageURL: META_STRING.image.kakao_share,
  },
};

const METADATA: Metadata = {
  metadataBase: new URL('https://www.posepicker.site'),
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
    version: 'v1.0.2',
  },
  openGraph: {
    title: META_STRING.title,
    description: META_STRING.description.sub,
    images: [META_STRING.image.main],
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

export default METADATA;
