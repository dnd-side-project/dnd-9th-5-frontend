export const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;
export const BASE_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '';

export const KAKAO_KEY = process.env.NEXT_PUBLIC_KAKAO_KEY;
export const KAKAO_SERVER_KEY = process.env.NEXT_PUBLIC_KAKAO_SERVER_KEY;
export const KAKAO_REDIRECT_URI = `${BASE_SITE_URL}/api/users/login/oauth/kakao`;
export const KAKAO_AUTHORIZE = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_SERVER_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const HOTJAR = { HJID: 3704547, HJSV: 6 };
