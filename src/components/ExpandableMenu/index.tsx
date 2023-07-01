import { Home, Shorts, Subscription, Library, WatchHistory } from '@/assets';
import { randomKey } from '@/utils';
import { StyledList } from './styles';
import SliderItem from '@/components/SliderItem';
import { useGetUser } from '@/hooks';
import { memo } from 'react';

const expandableList = [
  {
    name: '홈',
    Asset: Home,
  },
  {
    name: 'Shorts',
    Asset: Shorts,
  },
  {
    name: '구독',
    Asset: Subscription,
  },
  {
    name: '보관함',
    Asset: Library,
  },
];

const ExpandableMenu = () => {
  const { isLoaded, user } = useGetUser();

  return (
    <StyledList>
      {expandableList.map(({ name, Asset }) => (
        <SliderItem key={randomKey()} name={name} asset={<Asset />} />
      ))}
      {isLoaded && !user.isLoggedIn && (
        <SliderItem
          key={randomKey()}
          asset={<WatchHistory />}
          name="시청 기록"
        />
      )}
    </StyledList>
  );
};

export default memo(ExpandableMenu);
