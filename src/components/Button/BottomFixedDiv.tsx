import Banner from '../Header/Banner';
import { StrictPropsWithChildren } from '@/types';

export function ButtonList({ children }: StrictPropsWithChildren) {
  return <div className="flex gap-8 [&>*]:flex-1 [&>*]:grow">{children}</div>;
}

export function BottomDiv({ children }: StrictPropsWithChildren) {
  return (
    <div className={`max-w-layout mx-auto bg-white px-20 pb-24 pt-10`}>
      <ButtonList>{children}</ButtonList>
    </div>
  );
}

export function BottomFixedDiv({ children }: StrictPropsWithChildren) {
  return (
    <>
      <div className={`fixed inset-x-0 bottom-0 z-30`}>
        <BottomDiv>{children}</BottomDiv>
        <div id="ios-banner">
          <Banner />
        </div>
      </div>
      <div className="h-88" />
      <div id="ios-banner" className="h-62" />
    </>
  );
}
