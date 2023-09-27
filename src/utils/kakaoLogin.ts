export function kakaoLogin() {
  window.Kakao.Auth.authorize({
    redirectUri: `${process.env.NEXT_PUBLIC_SITE_URL}/kakao`,
  });
}
export function kakaoInit() {
  window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
}
