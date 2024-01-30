'use client';

import MenuList from '@/constants/menuList';

export default function MenuListSection() {
  return (
    <section className="flex flex-col">
      {MenuList.map((item, idx) =>
        item.text ? (
          <div
            key={idx}
            className={`cursor-pointer py-12 ${'highlight' in item && 'text-main-violet'}`}
            onClick={() => window.open(item.link)}
          >
            <span id="subtitle-2">{item.text}</span>
          </div>
        ) : (
          <div key={idx} className="py-12" />
        )
      )}
    </section>
  );
}
