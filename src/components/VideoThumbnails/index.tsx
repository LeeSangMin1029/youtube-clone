import { YoutubeVideoThumbnails } from '@/@types/youtube';
import { memo } from 'react';
import { Overlay, StyledVideo, InteractMargin } from './styles';
import { getDuration } from '@/utils';
import { useResizeObject } from '@/hooks';
import YoutubeVideoPlayer from '@/components/YoutubeVideoPlayer';
import CoverInteract from '@/components/CoverInteract';
import Thumbnails from '@/components/Thumbnails';
import { MouseState } from '@/@types/global';

type VideoThumbnailsProps = {
  id: string;
  thumbnails: YoutubeVideoThumbnails;
  duration: string;
  mouse: MouseState;
};

const VideoThumbnails = ({
  id,
  thumbnails,
  duration,
  mouse,
}: VideoThumbnailsProps) => {
  const { width, height, ref } = useResizeObject();

  return (
    <>
      <CoverInteract mouse={mouse} customCSS={InteractMargin} />
      <StyledVideo mouse={mouse} ref={ref}>
        <Thumbnails
          source={thumbnails?.maxres?.url || thumbnails?.high?.url}
          alt="thumbnails"
          width="auto"
          height="auto"
          to={`/watch?id=${id}`}
        >
          <Overlay>{getDuration(duration)}</Overlay>
        </Thumbnails>
        {mouse.enter && (
          <YoutubeVideoPlayer videoId={id} height={height} width={width} />
        )}
      </StyledVideo>
    </>
  );
};

export default memo(VideoThumbnails);
