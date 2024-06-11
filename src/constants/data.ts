import { URL } from './url';

interface MenuI {
  text: string;
  link: string;
  highlight?: boolean;
}
export const menuList: readonly MenuI[] = [
  { text: '공지사항', link: URL.menu.notice },
  { text: '자주 묻는 질문', link: URL.menu.faq },
  { text: '포즈피커 공식 SNS', link: URL.instagram, highlight: true },
  { text: '문의하기', link: URL.inquiry },
  { text: '문의하기', link: URL.inquiry },
  { text: '개발자의 비밀일기', link: URL.menu.release_note },
  { text: '', link: '' },
  { text: '이용약관', link: URL.menu.term },
  { text: '개인정보 처리방침', link: URL.menu.privacy },
] as const;

export const peopleCountList = [
  { text: '전체', value: 0 },
  { text: '1인', value: 1 },
  { text: '2인', value: 2 },
  { text: '3인', value: 3 },
  { text: '4인', value: 4 },
  { text: '5인+', value: 5 },
];

export const frameCountList = [
  { text: '전체', value: 0 },
  { text: '1컷', value: 1 },
  { text: '3컷', value: 3 },
  { text: '4컷', value: 4 },
  { text: '6컷', value: 6 },
  { text: '8컷+', value: 8 },
];

export const withdrawReasonList = [
  '사용을 잘 안하게 돼요',
  '원하는 포즈가 없어요',
  '포즈 탐색이 어려워요',
  '재가입 할 거 에요',
] as const;
