import { UserData } from '@/@types/database';
import { UserProfile } from './styles';
import { SVG } from '@/styles/utils';
import { UploadIcon, AlarmIcon } from '@/assets';
import { memo } from 'react';

type UserLoggedInProps = {
  user: UserData;
};

const UserLoggedIn = memo(({ user }: UserLoggedInProps) => {
  return (
    <>
      <SVG children={<UploadIcon />} />
      <SVG children={<AlarmIcon />} />
      <UserProfile>
        <div>
          <img src={user?.thumbnails} width={32} height={32} />
        </div>
      </UserProfile>
    </>
  );
});
export default UserLoggedIn;
