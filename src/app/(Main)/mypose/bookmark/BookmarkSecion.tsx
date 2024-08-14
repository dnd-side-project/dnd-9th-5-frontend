'use client';

import BookmarkEmpty from './BookmarkEmpty';
import { useBookmarkFeedQuery } from '@/shared';
import FeedSection from '@/shared/ui/Feed/FeedSection';

export default function BookmarkSecion() {
  const query = useBookmarkFeedQuery();

  return (
    <FeedSection query={query}>
      <BookmarkEmpty />
    </FeedSection>
  );
}
