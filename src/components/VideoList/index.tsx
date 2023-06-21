import { memo } from 'react';
import { ReloadTarget } from './styles';
import { DisplayGrid } from '@/styles/utils';
import { useIntersect, useFetchVideo } from '@/hooks';
import { Videos as Skeleton } from '@/components/Skeleton';
import VideoItem from '@/components/VideoItem';
import { randomKey } from '@/utils';
import { useVideoContext } from '@/context/VideoContext';

const VideoList = () => {
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
    <div>
      <DisplayGrid>
        {videos?.map((video) => (
          <VideoItem data={video} key={randomKey()} />
        ))}
      </DisplayGrid>
      {isFetching && <Skeleton />}
      <ReloadTarget ref={ref} />
    </div>
  );
};

export default memo(VideoList);
