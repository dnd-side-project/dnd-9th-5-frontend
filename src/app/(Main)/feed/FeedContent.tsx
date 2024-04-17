import Link from 'next/link';

import { usePoseFeedQuery } from '@/apis';
import { PrimaryButton } from '@/components/Button';
import EmptyCase from '@/components/Feed/EmptyCase';
import FeedSection from '@/components/Feed/FeedSection';
import { URL } from '@/constants/url';
import useFilterState from '@/hooks/useFilterState';

export default function FeedContent() {
  const { filterState } = useFilterState();
  const query = usePoseFeedQuery(filterState);

  return (
    <FeedSection query={query}>
      <EmptyCase
        title={'신비한 포즈를 찾으시는군요!'}
        text={'찾고 싶은 포즈를 저희에게 알려주세요.'}
      >
        <Link href={URL.inquiry}>
          <PrimaryButton text={'문의사항 남기기'} />
        </Link>
      </EmptyCase>
    </FeedSection>
  );
}
