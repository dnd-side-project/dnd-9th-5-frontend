import { ICON } from '@/constants/icon';
import Image from 'next/image';

export default function Photo() {
  return (
    <div className={`relative mb-16 inline-block h-200 w-full rounded-8 bg-sub-white`}>
      <div className="absolute bottom-6 right-6 h-36 w-36 rounded-24 bg-white bg-opacity-30 p-6">
        <Image src={ICON.bookmark.empty} width={24} height={24} alt="🔖" />
      </div>
    </div>
  );
}
