import Link from 'next/link';

import { Button, EmptyCase, URL, useFilterState, usePoseFeedQuery } from '@/shared';
import FeedSection from '@/shared/ui/Feed/FeedSection';

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
          <Button text={'문의사항 남기기'} />
        </Link>
      </EmptyCase>
    </FeedSection>
  );
}
