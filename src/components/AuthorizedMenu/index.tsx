import { useUserContext } from '@/context/UserContext';
import { ListTitle, LoginAbout } from './styles';
import UserLoginButton from '@/components/UserLoginButton';
import SubscriptionChannelLists from '@/components/SubscriptionChannelLists';
import ErrorBoundarySuspense from '@/components/ErrorBoundarySuspense';
import Fallback from '@/components/Fallback';

const AuthorizedMenu = () => {
  const { user } = useUserContext();

  return (
    <>
      {user.isLoggedIn ? (
        <>
          <ListTitle>구독</ListTitle>
          <ErrorBoundarySuspense Loading={<></>} Fallback={Fallback}>
            <SubscriptionChannelLists />
          </ErrorBoundarySuspense>
        </>
      ) : (
        <LoginAbout>
          <span>
            로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수
            있습니다.
          </span>
          <UserLoginButton />
        </LoginAbout>
      )}
    </>
  );
};

export default AuthorizedMenu;
