'use client';

import BookmarkEmpty from './BookmarkEmpty';
import BookmarkSecion from './BookmarkSecion';
import useUserState from '@/context/userState';

export default function BookmarkPage() {
  const { token } = useUserState();

  if (token) return <BookmarkSecion accesstoken={token?.accessToken} />;
  else return <BookmarkEmpty />;
}
