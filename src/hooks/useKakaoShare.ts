'use client';

import { useEffect } from 'react';

import { KAKAO_JS_KEY } from '@/constants/env';
import { OPEN_GRAPH } from '@/constants/meta';

export default function useKakaoShare() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const shareKakao = (uri: string) => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(KAKAO_JS_KEY);
      }

      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          ...OPEN_GRAPH.kakao_share,
          link: {
            mobileWebUrl: uri,
            webUrl: uri,
          },
        },
        buttons: [
          {
            title: '포즈 확인하기',
            link: {
              mobileWebUrl: uri,
              webUrl: uri,
            },
          },
        ],
      });
    }
  };

  return { shareKakao };
}
