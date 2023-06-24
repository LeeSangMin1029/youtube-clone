import {
  Home,
  Shorts,
  Subscription,
  Library,
  WatchHistory,
  MyVideo,
  LaterWatchVideo,
  VideoLike,
} from '@/assets';
import SliderItem from '@/components/SliderItem';
import { StyledMenu, Section, StyledList, ListTitle } from './styles';
import { randomKey } from '@/utils';
import ChannelOfPlayLists from '@/components/ChannelOfPlayLists';
import ErrorBoundarySuspense from '@/components/ErrorBoundarySuspense';
import Fallback from '@/components/Fallback';
import SubscriptionChannelLists from '@/components/SubscriptionChannelLists';

const firstList = [
  { name: '홈', Asset: <Home /> },
  { name: 'Shorts', Asset: <Shorts /> },
  { name: '구독', Asset: <Subscription /> },
];

const secondList = [
  { name: '보관함', Asset: <Library /> },
  { name: '시청 기록', Asset: <WatchHistory /> },
  { name: '내 동영상', Asset: <MyVideo /> },
  { name: '나중에 볼 동영상', Asset: <LaterWatchVideo /> },
  { name: '좋아요 표시한 동영상', Asset: <VideoLike /> },
];

const ExpandedMenu = () => {
  return (
    <StyledMenu>
      <Section>
        <StyledList>
          {firstList.map(({ name, Asset }) => (
            <SliderItem key={randomKey()} asset={Asset} name={name} />
          ))}
        </StyledList>
        <div className="divide" />
      </Section>
      <Section>
        <StyledList>
          {secondList.map(({ name, Asset }) => (
            <SliderItem key={randomKey()} asset={Asset} name={name} />
          ))}
          <ErrorBoundarySuspense Fallback={Fallback} Loading={<></>}>
            <ChannelOfPlayLists />
          </ErrorBoundarySuspense>
        </StyledList>
      </Section>
      <div className="divide" />
      <Section>
        <ListTitle>구독</ListTitle>
        <StyledList>
          <ErrorBoundarySuspense Fallback={Fallback} Loading={<></>}>
            <SubscriptionChannelLists />
          </ErrorBoundarySuspense>
        </StyledList>
      </Section>
    </StyledMenu>
  );
};

export default ExpandedMenu;
