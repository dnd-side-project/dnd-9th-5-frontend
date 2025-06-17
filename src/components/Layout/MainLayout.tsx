import Navigation from './Navigation.client';
import Header from '@/components/Layout/Header';
import { Spacing } from '@/components/Spacing';

interface Props extends React.PropsWithChildren, MainHeaderI {}

export default function MainLayout({ children, subHeader }: Props) {
  return (
    <div className="flex h-full flex-col px-20">
      <MainHeader subHeader={subHeader} />
      {children}
    </div>
  );
}

// region MainHeader
interface MainHeaderI {
  subHeader?: {
    children: React.ReactNode;
    height: number;
  };
}
function MainHeader({ subHeader }: MainHeaderI) {
  return (
    <>
      <Spacing size={48} />
      {subHeader && <Spacing size={subHeader.height} />}
      <Header title="PosePicker" menu={true}>
        <Navigation />
        {subHeader && subHeader.children}
      </Header>
    </>
  );
}
