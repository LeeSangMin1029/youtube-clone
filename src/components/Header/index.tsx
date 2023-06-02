import { StyledHeader, Start, Center } from './styles';
import ErrorBoundarySuspense from '@/components/ErrorBoundarySuspense';
import { lazy } from 'react';
import Fallback from '@/components/Fallback';
const UserAreaInfo = lazy(() => import('@/components/UserAreaInfo'));

const Header = () => {
  return (
    <StyledHeader>
      <Start />
      <Center />
      <ErrorBoundarySuspense Fallback={Fallback} Loading={<></>}>
        <UserAreaInfo />
      </ErrorBoundarySuspense>
    </StyledHeader>
  );
};

export default Header;
