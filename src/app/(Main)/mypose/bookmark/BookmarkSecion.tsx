import BookmarkEmpty from './BookmarkEmpty';
import { useBookmarkFeedQuery } from '@/apis';
import FeedSection from '@/components/Feed/FeedSection';

interface BookmarkSecionI {
  accesstoken: string;
}

export default function BookmarkSecion({ accesstoken }: BookmarkSecionI) {
  const query = useBookmarkFeedQuery(accesstoken);

  return (
    <FeedSection query={query}>
      <BookmarkEmpty />
    </FeedSection>
  );
}
