export const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;
export const BASE_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '';

export const KAKAO_JS_KEY = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;
export const KAKAO_REST_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_KEY;
export const KAKAO_REDIRECT_URI = `${BASE_SITE_URL}/auth`;
export const KAKAO_AUTHORIZE = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const HOTJAR = { HJID: 3704547, HJSV: 6 };

export const NODE_ENV = process.env.NODE_ENV;
