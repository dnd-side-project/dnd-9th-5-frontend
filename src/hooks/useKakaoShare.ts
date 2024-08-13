'use client';

import { useEffect } from 'react';

import { KAKAO_JS_KEY } from '@/constants';

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

  const shareKakao = (poseId: number) => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(KAKAO_JS_KEY);
      }

      kakao.Share.sendCustom({
        templateId: 108921,
        templateArgs: {
          poseId,
        },
      });
    }
  };

  return { shareKakao };
}
