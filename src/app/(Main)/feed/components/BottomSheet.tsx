import { ICON } from '@/constants/icon';
import Image from 'next/image';

export default function BottomSheet() {
  return (
    <div className="fixed inset-x-0 bottom-0 rounded-t-16 bg-white">
      <div className="flex justify-end px-8 pt-12">
        <button className="p-12" onClick={() => console.log('close')}>
          <Image src={ICON.close} width={24} height={24} alt={'x'} />
        </button>
      </div>
      <div className="px-20 pb-32">
        <div id="subtitle-2" className="text-secondary">
          인원 수
        </div>
        <div id="subtitle-2" className="text-secondary">
          프레임 수
        </div>
        <div id="subtitle-2" className="text-secondary">
          태그
        </div>
      </div>
    </div>
  );
}
