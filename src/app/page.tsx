import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/pick');
  return <div></div>;
}
