import { memo } from 'react';
import { Container, Interact } from './styles';
import UserLoggedIn from '@/components/UserLoggedIn';
import UserLoggedOut from '@/components/UserLoggedOut';
import { useGetUser } from '@/hooks';

const UserAreaInfo = memo(() => {
  const { isLoaded, user } = useGetUser();

  return (
    <Container>
      <Interact>
        {isLoaded && (user.isLoggedIn ? <UserLoggedIn /> : <UserLoggedOut />)}
      </Interact>
    </Container>
  );
});

export default UserAreaInfo;
