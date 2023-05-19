import { memo } from 'react';
import UserLoggedIn from '@/components/UserLoggedIn';
import UserLoggedOut from '@/components/UserLoggedOut';
import Loading from '@/components/Loading';
import { useLogin } from '@/hooks';

const UserLogin = memo(() => {
  const { isLoggedIn, user } = useLogin();
  return (
    <Loading>
      {isLoggedIn ? <UserLoggedIn user={user} /> : <UserLoggedOut />}
    </Loading>
  );
});

export default UserLogin;
