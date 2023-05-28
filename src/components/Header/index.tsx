import UserAreaInfo from '@/components/UserAreaInfo';
import { StyledHeader, Start, Center } from './styles';

const Header = () => {
  return (
    <StyledHeader>
      <Start />
      <Center />
      <UserAreaInfo />
    </StyledHeader>
  );
};

export default Header;
