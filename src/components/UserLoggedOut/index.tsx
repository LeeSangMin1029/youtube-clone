import { memo } from 'react';
import { SettingIcon } from '@/assets';
import UserLoginButton from '@/components/UserLoginButton';
import AnimateElement from '@/components/AnimateElement';
import { CircularButton } from '@/styles/utils';

const UserLoggedOut = memo(() => {
  return (
    <>
      <AnimateElement StyledComp={CircularButton}>
        <SettingIcon width="24px" height="24px" />
      </AnimateElement>
      <UserLoginButton />
    </>
  );
});

export default UserLoggedOut;
