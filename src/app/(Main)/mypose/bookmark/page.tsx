import BookmarkEmpty from './BookmarkEmpty';
import BookmarkSecion from './BookmarkSecion';
import { getServerCookie } from '@/utils';

export default async function BookmarkPage() {
  const token = await getServerCookie('accesstoken');

  if (token) return <BookmarkSecion />;
  return <BookmarkEmpty />;
}
