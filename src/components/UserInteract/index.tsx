import { memo } from 'react';
import { Container, Interact } from './styles';
import UserLogin from '@/components/UserLogin';

const UserInteract = memo(() => {
  return (
    <Container>
      <Interact>
        <UserLogin />
      </Interact>
    </Container>
  );
});

export default UserInteract;
