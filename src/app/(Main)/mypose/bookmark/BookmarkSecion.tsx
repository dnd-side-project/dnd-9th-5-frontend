import BookmarkEmpty from './BookmarkEmpty';
import { useBookmarkFeedQuery } from '@/apis';
import FeedSection from '@/components/Feed/FeedSection';

interface BookmarkSecionI {
  accesstoken: string;
}

export default function BookmarkSecion({ accesstoken }: BookmarkSecionI) {
  const { data, fetchNextPage } = useBookmarkFeedQuery(accesstoken);

  return (
    <FeedSection data={data} fetchNextPage={fetchNextPage}>
      <BookmarkEmpty />
    </FeedSection>
  );
}
