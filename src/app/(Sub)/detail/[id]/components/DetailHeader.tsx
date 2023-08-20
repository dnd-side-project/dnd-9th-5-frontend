import Image from 'next/image';

import IconButton from '@/components/Button/IconButton';
import { Header } from '@/components/Header';

export default function DetailHeader() {
  return (
    <Header
      leftNode={
        <IconButton size="large">
          <Image src="/icons/close.svg" width={24} height={24} alt="back" />
        </IconButton>
      }
      rightNode={
        <IconButton size="large">
          <Image src="/icons/bookmark.svg" width={24} height={24} alt="bookmark" />
        </IconButton>
      }
      className="px-4"
    />
  );
}
