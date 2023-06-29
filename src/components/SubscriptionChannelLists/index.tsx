import { YoutubeChannelsList } from '@/@types/youtube';
import MenuMoreDetail from '@/components/MenuMoreDetail';
import { useUserContext } from '@/context/UserContext';
import { fetchPost, randomKey } from '@/utils';
import { channelListKeys } from '@/utils/reactQueryKeys';
import { useQuery } from 'react-query';
import SliderItem from '@/components/SliderItem';
import { memo } from 'react';
import Thumbnails from '@/components/Thumbnails';

const SubscriptionChannelLists = () => {
  const {
    user: { googleID },
  } = useUserContext();
  const { data: channelLists } = useQuery({
    queryKey: [...channelListKeys.lists(), googleID],
    queryFn: async () =>
      await fetchPost<YoutubeChannelsList>('subscriptions', { googleID }),
  });
  console.log(channelLists);

  return (
    <MenuMoreDetail>
      {channelLists?.items.map(
        ({ snippet: { thumbnails, title, resourceId } }) => (
          <SliderItem
            key={randomKey()}
            name={title}
            asset={
              <Thumbnails
                width="24px"
                height="24px"
                source={thumbnails.default.url || thumbnails.high.url}
                alt={title}
                to={`https://www.youtube.com/channel/${resourceId?.channelId}`}
              />
            }
          />
        ),
      )}
    </MenuMoreDetail>
  );
};

export default memo(SubscriptionChannelLists);
