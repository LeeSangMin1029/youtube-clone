import UserInteract from '@/components/UserInteract';
import { StyledHeader, Start, Center } from './styles';

const Header = () => {
  return (
    <StyledHeader>
      <Start />
      <Center />
      <UserInteract />
    </StyledHeader>
  );
};

export default Header;
