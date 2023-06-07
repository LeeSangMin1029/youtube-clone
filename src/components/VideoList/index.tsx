import { memo, useMemo } from 'react';
import { ReloadTarget } from './styles';
import { useIntersect, useFetchVideo } from '@/hooks';
import { Videos as Skeleton } from '@/components/Skeleton';
import VideoItem from '@/components/VideoItem';
import { randomKey } from '@/utils';

const VideoList = memo(() => {
  const { videos, isFetching, hasNextPage, fetchNextPage } = useFetchVideo({
    maxResults: 30,
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
      {isFetching && <Skeleton videoCount={30} />}
      <ReloadTarget ref={ref} />
    </>
  );
});

export default VideoList;
