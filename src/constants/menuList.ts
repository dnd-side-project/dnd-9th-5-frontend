import { URL } from './url';

interface MenuI {
  text: string;
  link: string;
  highlight?: boolean;
}
const MenuList: readonly MenuI[] = [
  { text: '공지사항', link: URL.menu.notice },
  { text: '자주 묻는 질문', link: URL.menu.faq },
  { text: '포즈피커 공식 SNS', link: URL.instagram, highlight: true },
  { text: '문의하기', link: URL.inquiry },
  { text: '', link: '' },
  { text: '이용약관', link: URL.menu.term },
  { text: '개인정보 처리방침', link: URL.menu.privacy },
] as const;

export default MenuList;
