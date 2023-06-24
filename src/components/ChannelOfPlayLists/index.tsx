import { LessDetails, MoreDetails, PlayListItem } from '@/assets';
import { useUserContext } from '@/context/UserContext';
import { useQuery } from 'react-query';
import { playListKeys } from '@/utils/reactQueryKeys';
import { fetchPost, randomKey } from '@/utils';
import { YoutubePlayListsInfo } from '@/@types/youtube';
import SliderItem from '@/components/SliderItem';
import { memo, useState } from 'react';

const ChannelOfPlayLists = () => {
  const [more, setMore] = useState(false);
  const {
    user: { googleID },
  } = useUserContext();
  const { data: playLists } = useQuery({
    queryKey: [...playListKeys.lists(), googleID],
    queryFn: async () =>
      await fetchPost<YoutubePlayListsInfo>('playlists', { googleID }),
  });

  return (
    <>
      {more &&
        playLists?.items.map(({ snippet }) => (
          <SliderItem
            key={randomKey()}
            asset={<PlayListItem />}
            name={snippet.title}
          />
        ))}
      <SliderItem
        asset={more ? <LessDetails /> : <MoreDetails />}
        name={more ? '간략히 보기' : '더보기'}
        handleUp={() => setMore(!more)}
      />
    </>
  );
};

export default memo(ChannelOfPlayLists);
