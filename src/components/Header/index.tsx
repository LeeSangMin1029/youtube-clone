import { StyledHeader, Start, Center } from './styles';
import ErrorBoundarySuspense from '@/components/ErrorBoundarySuspense';
import DropdownMenu from '@/components/DropdownMenu';
import Fallback from '@/components/Fallback';
import { YoutubeLogo } from '@/assets';
import { lazy } from 'react';
const UserAreaInfo = lazy(() => import('@/components/UserAreaInfo'));

const Header = () => {
  return (
    <StyledHeader>
      <Start>
        <DropdownMenu />
        <YoutubeLogo />
      </Start>
      <Center />
      <ErrorBoundarySuspense Fallback={Fallback} Loading={<></>}>
        <UserAreaInfo />
      </ErrorBoundarySuspense>
    </StyledHeader>
  );
};

export default Header;
