import BookmarkEmpty from './BookmarkEmpty';
import BookmarkSecion from './BookmarkSecion';
import { COOKIE_ACCESS_TOKEN, getServerCookie } from '@/shared';

export default async function BookmarkPage() {
  const token = await getServerCookie(COOKIE_ACCESS_TOKEN);

  if (token) return <BookmarkSecion />;
  return <BookmarkEmpty />;
}
