'use client';

import { useEffect } from 'react';

import { KAKAO_KEY } from '@/constants';
import { META_STRING } from '@/constants/meta';

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
        kakao.init(KAKAO_KEY);
      }

      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: META_STRING.title,
          description: META_STRING.description.main,
          imageUrl: META_STRING.image.kakao_share,
          link: {
            mobileWebUrl: uri,
            webUrl: uri,
          },
        },
        buttons: [
          {
            title: META_STRING.description.sub,
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
