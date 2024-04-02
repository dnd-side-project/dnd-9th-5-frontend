import BookmarkEmpty from './BookmarkEmpty';
import BookmarkSecion from './BookmarkSecion';
import useUserState from '@/context/userState';

export default function BookmarkPage() {
  const { token } = useUserState();

  return <>ghi</>;
  // if (token) return <BookmarkSecion accesstoken={token?.accessToken} />;
  // else return <BookmarkEmpty />;
}
