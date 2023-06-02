import { memo } from 'react';
import { useVideos } from '@/hooks';
import VideoItem from '@/components/VideoItem';
import { randomKey } from '@/utils';

const VideoList = memo(() => {
  const { videos } = useVideos({ maxResults: 5, chart: 'mostPopular' });
  return (
    <>
      {videos?.map((video) => (
        <VideoItem data={video} key={randomKey()} />
      ))}
    </>
  );
});

export default VideoList;
