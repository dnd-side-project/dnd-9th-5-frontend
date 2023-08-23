import PortalWrapper from '../Modal/PortalWrapper';
import { Portal } from '../Portal';
import { StrictPropsWithChildren } from '@/types';

export default function Loading({ children }: StrictPropsWithChildren) {
  return (
    <Portal documentId="loading">
      <PortalWrapper isBackGroundBlur={false} className="top-190">
        {children}
      </PortalWrapper>
    </Portal>
  );
}
