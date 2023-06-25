import { memo } from 'react';
import Setting from '@/components/Setting';
import UserLoginButton from '@/components/UserLoginButton';

const UserLoggedOut = memo(() => {
  return (
    <>
      <Setting />
      <UserLoginButton />
    </>
  );
});

export default UserLoggedOut;
