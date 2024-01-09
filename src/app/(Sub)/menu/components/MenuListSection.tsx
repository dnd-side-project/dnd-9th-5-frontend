'use client';

import { URL } from '@/constants/url';

const MenuList = [
  { text: '공지사항', link: URL.information },
  { text: '자주 묻는 질문', link: '' },
  { text: '문의하기', link: '' },
  { text: '', link: '' },
  { text: '이용약관', link: '' },
  { text: '개인정보 처리방침', link: '' },
] as const;

export default function MenuListSection() {
  return (
    <section className="flex flex-col">
      {MenuList.map((item, idx) =>
        item.text ? (
          <div key={idx} className="cursor-pointer py-12" onClick={() => window.open(item.link)}>
            <span id="subtitle-2">{item.text}</span>
          </div>
        ) : (
          <div key={idx} className="py-12" />
        )
      )}
    </section>
  );
}
