import MyposeTab from './MyposeTab';
import MainLayout from '@/components/Layout/MainLayout';
import { StrictPropsWithChildren } from '@/types';

export default function Layout({ children }: StrictPropsWithChildren) {
  return <MainLayout subHeader={{ children: <MyposeTab />, height: 72 }}>{children}</MainLayout>;
}
