import { StrictPropsWithChildren } from '@/types';

export function ButtonList({ children }: StrictPropsWithChildren) {
  return <div className="flex gap-8 [&>*]:flex-1 [&>*]:grow">{children}</div>;
}

export function BottomDiv({ children }: StrictPropsWithChildren) {
  return (
    <div className={`mx-auto max-w-440 bg-white px-20 pb-25 pt-10`}>
      <ButtonList>{children}</ButtonList>
    </div>
  );
}

export function BottomFixedDiv({ children }: StrictPropsWithChildren) {
  return (
    <div className={`fixed inset-x-0 bottom-0`}>
      <BottomDiv>{children}</BottomDiv>
    </div>
  );
}
