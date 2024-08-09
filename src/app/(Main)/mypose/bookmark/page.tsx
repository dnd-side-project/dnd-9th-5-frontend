import BookmarkEmpty from './BookmarkEmpty';
import BookmarkSecion from './BookmarkSecion';
import { ACCESS_TOKEN } from '@/constants';
import { getServerCookie } from '@/utils';

export default async function BookmarkPage() {
  const token = await getServerCookie(ACCESS_TOKEN);

  if (token) return <BookmarkSecion />;
  return <BookmarkEmpty />;
}
