import { StyledHeader, Start, Center } from './styles';
import ErrorBoundarySuspense from '@/components/ErrorBoundarySuspense';
import HamburgerButton from '@/components/HamburgerButton';
import Fallback from '@/components/Fallback';
import { YoutubeLogo } from '@/assets';
import { lazy, memo } from 'react';
const UserAreaInfo = lazy(() => import('@/components/UserAreaInfo'));

const Header = () => {
  return (
    <StyledHeader>
      <Start>
        <HamburgerButton />
        <YoutubeLogo />
      </Start>
      <Center />
      <ErrorBoundarySuspense Fallback={Fallback} Loading={<></>}>
        <UserAreaInfo />
      </ErrorBoundarySuspense>
    </StyledHeader>
  );
};

export default memo(Header);
