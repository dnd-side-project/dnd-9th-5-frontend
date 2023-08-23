import { useEffect } from 'react';

import { KAKAO_KEY } from '@/constants';

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
          title: '포즈를 뽑아봐 !',
          description: '당신에게 어울리는 포즈를 추천해드립니다.',
          imageUrl:
            'https://github.com/gloddy-dev/gloddy-client/assets/62178788/a145c7ca-b487-4b2a-9913-cc1589e44f91',
          link: {
            mobileWebUrl: uri,
            webUrl: uri,
          },
        },
        buttons: [
          {
            title: '포즈를 뽑아봐 !',
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
