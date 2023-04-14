import { memo } from 'react';
import { Container, Interact } from './styles';
import UserLogin from '@/components/UserLogin';
import UserProvider from '@/context/UserContext';

const UserInteract = memo(() => {
  return (
    <Container>
      <UserProvider>
        <Interact>
          <UserLogin />
        </Interact>
      </UserProvider>
    </Container>
  );
});

export default UserInteract;
