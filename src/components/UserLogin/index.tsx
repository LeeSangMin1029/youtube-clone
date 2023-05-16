import { memo } from 'react';
import UserLoggedIn from '@/components/UserLoggedIn';
import UserLoggedOut from '@/components/UserLoggedOut';
import Loading from '@/components/Loading';
import { useUser } from '@/hooks';

const UserLogin = memo(() => {
  const { isLoggedIn } = useUser();
  return <Loading>{isLoggedIn ? <UserLoggedIn /> : <UserLoggedOut />}</Loading>;
});

export default UserLogin;
