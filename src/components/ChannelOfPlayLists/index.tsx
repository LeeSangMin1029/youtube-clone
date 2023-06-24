import { PlayListItem } from '@/assets';
import { useUserContext } from '@/context/UserContext';
import { useQuery } from 'react-query';
import { playListKeys } from '@/utils/reactQueryKeys';
import { fetchPost, randomKey } from '@/utils';
import { YoutubePlayListsInfo } from '@/@types/youtube';
import SliderItem from '@/components/SliderItem';
import { memo } from 'react';
import MenuMoreDetail from '@/components/MenuMoreDetail';

const ChannelOfPlayLists = () => {
  const {
    user: { googleID },
  } = useUserContext();
  const { data: playLists } = useQuery({
    queryKey: [...playListKeys.lists(), googleID],
    queryFn: async () =>
      await fetchPost<YoutubePlayListsInfo>('playlists', { googleID }),
  });

  return (
    <MenuMoreDetail>
      {playLists?.items.map(({ snippet }) => (
        <SliderItem
          key={randomKey()}
          asset={<PlayListItem />}
          name={snippet.title}
        />
      ))}
    </MenuMoreDetail>
  );
};

export default memo(ChannelOfPlayLists);
