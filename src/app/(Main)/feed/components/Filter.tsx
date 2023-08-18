import Image from 'next/image';

import { ICON } from '@/constants/icon';

export default function Filter() {
  return (
    <div className="fixed inset-x-0 top-116 flex h-56 items-center bg-white px-20">
      <button className="flex items-center gap-8 rounded-8 bg-sub-white px-16 py-9">
        <h5 id="subtitle-2">필터</h5>
        <Image src={ICON.carat.down} alt="▾" width={16} height={16} priority />
      </button>
    </div>
  );
}
