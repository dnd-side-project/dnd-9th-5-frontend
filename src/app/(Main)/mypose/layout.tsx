import LoginSection from './components/LoginSection';
import MyposeTab from './components/MyposeTab';
import { StrictPropsWithChildren } from '@/types';

export default function Layout({ children }: StrictPropsWithChildren) {
  return (
    <>
      <LoginSection />
      <MyposeTab />
      {children}
    </>
  );
}
