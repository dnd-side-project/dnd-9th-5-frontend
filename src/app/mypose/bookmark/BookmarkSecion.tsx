'use client';

import BookmarkEmpty from './BookmarkEmpty';
import { useBookmarkFeedQuery } from '@/apis';
import Masonry from '@/components/Feed/Masonry';
import { COOKIE_ACCESS_TOKEN } from '@/constants';
import { getClientCookie } from '@/utils';

export default function BookmarkSecion() {
  const accesstoken = getClientCookie(COOKIE_ACCESS_TOKEN);
  // const query = useBookmarkFeedQuery({ enabled: accesstoken !== '' });

  return (
    <Masonry data={null}>
      <BookmarkEmpty />
    </Masonry>
  );
}
