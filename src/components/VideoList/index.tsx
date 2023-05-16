import { DisplayGrid, MarginContent } from './styles';
import { randomKey } from '@/utils';
import { useVideos } from '@/hooks';
import VideoItem from '@/components/VideoItem';

const VideoList = () => {
  const { videos, isLoading } = useVideos();
  if (isLoading) return <div>isLoading...</div>;

  return (
    <MarginContent>
      <DisplayGrid>
        {videos?.map((video) => (
          <VideoItem key={randomKey()} data={video} />
        ))}
      </DisplayGrid>
    </MarginContent>
  );
};

export default VideoList;
