'use client';

import BookmarkEmpty from './BookmarkEmpty';
import { useBookmarkFeedQuery } from '@/apis';
import FeedSection from '@/components/Feed/FeedSection';

export default function BookmarkSecion() {
  const query = useBookmarkFeedQuery();

  return (
    <FeedSection query={query}>
      <BookmarkEmpty />
    </FeedSection>
  );
}
