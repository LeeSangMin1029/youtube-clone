import { YoutubeChannelsList } from '@/@types/youtube';
import MenuMoreDetail from '@/components/MenuMoreDetail';
import { useUserContext } from '@/context/UserContext';
import { fetchPost, randomKey } from '@/utils';
import { channelListKeys } from '@/utils/reactQueryKeys';
import { useQuery } from 'react-query';
import SliderItem from '@/components/SliderItem';
import { memo } from 'react';
import ChannelThumbnails from '@/components/ChannelThumbnails';

const SubscriptionChannelLists = () => {
  const {
    user: { googleID },
  } = useUserContext();
  const { data: channelLists } = useQuery({
    queryKey: [...channelListKeys.lists(), googleID],
    queryFn: async () =>
      await fetchPost<YoutubeChannelsList>('subscriptions', { googleID }),
  });

  return (
    <MenuMoreDetail>
      {channelLists?.items.map(({ snippet: { thumbnails, title } }) => (
        <SliderItem
          key={randomKey()}
          name={title}
          asset={
            <ChannelThumbnails
              width="24px"
              height="24px"
              source={thumbnails}
              alt={title}
            />
          }
        />
      ))}
    </MenuMoreDetail>
  );
};

export default memo(SubscriptionChannelLists);
