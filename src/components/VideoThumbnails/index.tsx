import { YoutubeVideoThumbnails } from '@/@types/youtube';
import { memo } from 'react';
import { Overlay, StyledVideo } from './styles';
import { getDuration } from '@/utils';
import { useResizeObject } from '@/hooks';
import YoutubeVideoPlayer from '@/components/YoutubeVideoPlayer';
import Thumbnails from '@/components/Thumbnails';

type VideoThumbnailsProps = {
  id: string;
  thumbnails: YoutubeVideoThumbnails;
  duration: string;
};

const VideoThumbnails = ({
  id,
  thumbnails,
  duration,
}: VideoThumbnailsProps) => {
  const { width, height, ref } = useResizeObject();

  return (
    <StyledVideo ref={ref}>
      <Thumbnails
        source={thumbnails?.maxres?.url || thumbnails?.high?.url}
        alt="thumbnails"
        width="auto"
        height="auto"
        to={`/watch?id=${id}`}
      >
        <Overlay>{getDuration(duration)}</Overlay>
      </Thumbnails>
      {/* {mouse.enter && (
        <YoutubeVideoPlayer videoId={id} height={height} width={width} />
      )} */}
    </StyledVideo>
  );
};

export default memo(VideoThumbnails);
