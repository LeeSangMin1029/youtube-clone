import { DisplayGrid, GridRow, MarginContent } from './styles';
import VideoItem from '@/components/VideoItem';
import { useVideos } from '@/hooks';
import { divideArrays, randomKey } from '@/utils';

const getChannels = (channels: Channel[], id: string) => {
  const result = channels.filter((channel) => channel.id === id)[0];
  return result;
};

const getItems = ({ videos, channels }: { videos: any; channels: any }) =>
  videos.map((video: any) => {
    const result = Object.assign(
      {},
      { channel: getChannels(channels, video.snippet.channelId) },
      video,
    );
    return result;
  });

const VideoList = () => {
  const { fetched, isLoading } = useVideos(true);
  if (isLoading) return <div>...Loading</div>;
  const result = divideArrays(getItems(fetched), 5);
  return (
    <MarginContent>
      <DisplayGrid>
        {result.map((items) => (
          <GridRow key={randomKey()}>
            {items.map((item) => (
              <VideoItem key={randomKey()} data={item} />
            ))}
          </GridRow>
        ))}
      </DisplayGrid>
    </MarginContent>
  );
};

export default VideoList;
