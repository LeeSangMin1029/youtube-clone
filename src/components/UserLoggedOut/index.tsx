import { memo } from 'react';
import { LoginButton } from './styles';
import { openSignInWindow, googleAuthentication } from '@/utils';
import { LoginIcon } from '@/assets';
import { useCreateUser } from '@/hooks';
import Setting from '@/components/Setting';

const UserLoggedOut = memo(() => {
  useCreateUser();
  const displayLoginWindow = async () => {
    const openPopupUrl = await googleAuthentication();
    openSignInWindow(openPopupUrl, 'google Auth');
  };

  return (
    <>
      <Setting />
      <LoginButton onClick={displayLoginWindow}>
        <LoginIcon fill="#065fd4" width="24px" height="24px" />
        로그인
      </LoginButton>
    </>
  );
});

export default UserLoggedOut;
