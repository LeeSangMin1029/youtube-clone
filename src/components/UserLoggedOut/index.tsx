import { memo } from 'react';
import { LoginButton } from './styles';
import { openSignInWindow, googleAuthentication } from '@/utils';
import { SettingIcon, LoginIcon } from '@/assets';
import { SVG } from '@/styles/utils';
import { useCreateUser } from '@/hooks';

const UserLoggedOut = memo(() => {
  useCreateUser();
  const displayLoginWindow = async () => {
    const openPopupUrl = await googleAuthentication();
    openSignInWindow(openPopupUrl, 'google Auth');
  };

  return (
    <>
      <SVG children={<SettingIcon />} />
      <LoginButton onClick={displayLoginWindow}>
        <LoginIcon fill="#065fd4" width="24px" height="24px" />
        로그인
      </LoginButton>
    </>
  );
});

export default UserLoggedOut;
