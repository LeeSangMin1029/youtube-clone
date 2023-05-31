import { memo } from 'react';
import { Container, Interact } from './styles';
import UserLoggedIn from '@/components/UserLoggedIn';
import UserLoggedOut from '@/components/UserLoggedOut';
import { useLogin } from '@/hooks';

const UserAreaInfo = memo(() => {
  const { isLoaded, user } = useLogin();
  return (
    <Container>
      <Interact>
        {isLoaded && (user ? <UserLoggedIn /> : <UserLoggedOut />)}
      </Interact>
    </Container>
  );
});

export default UserAreaInfo;
