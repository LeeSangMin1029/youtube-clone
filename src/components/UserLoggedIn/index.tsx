import { UserData } from '@/@types/database';
import { SVGWrapper, UserProfile } from './styles';
import { UploadIcon, AlarmIcon } from '@/assets';
import { memo } from 'react';

type UserLoggedInProps = {
  user: UserData;
};

const UserLoggedIn = memo(({ user }: UserLoggedInProps) => {
  return (
    <>
      <SVGWrapper>
        <UploadIcon />
      </SVGWrapper>
      <SVGWrapper>
        <AlarmIcon />
      </SVGWrapper>
      <UserProfile>
        <div>
          <img src={user?.thumbnails} width={32} height={32} />
        </div>
      </UserProfile>
    </>
  );
});
export default UserLoggedIn;
