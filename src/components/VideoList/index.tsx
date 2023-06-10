import { memo } from 'react';
import { ReloadTarget } from './styles';
import { useIntersect, useFetchVideo } from '@/hooks';
import { Videos as Skeleton } from '@/components/Skeleton';
import VideoItem from '@/components/VideoItem';
import { randomKey } from '@/utils';
import { useVideoContext } from '@/context/VideoContext';

const VideoList = memo(() => {
  const { viewVideoCount } = useVideoContext();
  const { videos, isFetching, hasNextPage, fetchNextPage } = useFetchVideo({
    maxResults: viewVideoCount,
    chart: 'mostPopular',
  });

  const ref = useIntersect((entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) fetchNextPage();
  });

  return (
    <>
      {videos?.map((video) => (
        <VideoItem data={video} key={randomKey()} />
      ))}
      {isFetching && <Skeleton />}
      <ReloadTarget ref={ref} />
    </>
  );
});

export default VideoList;
