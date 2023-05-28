import { memo } from 'react';
import { Container, Interact } from './styles';
import UserLoggedIn from '@/components/UserLoggedIn';
import UserLoggedOut from '@/components/UserLoggedOut';
import Loading from '@/components/Loading';
import { useLogin } from '@/hooks';

const UserAreaInfo = memo(() => {
  const { isLoggedIn, user } = useLogin();
  return (
    <Container>
      <Interact>
        <Loading>
          {isLoggedIn ? <UserLoggedIn user={user} /> : <UserLoggedOut />}
        </Loading>
      </Interact>
    </Container>
  );
});

export default UserAreaInfo;
