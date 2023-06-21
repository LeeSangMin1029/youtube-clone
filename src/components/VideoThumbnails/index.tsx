import { YoutubeVideoThumbnails } from '@/@types/youtube';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Overlay, Thumbnails, InteractMargin } from './styles';
import { getDuration } from '@/utils';
import { useMouseHandler, useResizeObject } from '@/hooks';
import YoutubeVideoPlayer from '@/components/YoutubeVideoPlayer';
import CoverInteract from '@/components/CoverInteract';

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
  const { mouse, ...handler } = useMouseHandler();
  const { width, height, ref } = useResizeObject();

  return (
    <div {...handler}>
      <CoverInteract mouse={mouse} customCSS={InteractMargin} />
      <Thumbnails mouse={mouse} ref={ref}>
        <Link to={`/watch?id=${id}`}>
          <img
            src={thumbnails?.maxres?.url || thumbnails?.high?.url}
            alt="thumbnails"
          />
          <Overlay>{getDuration(duration)}</Overlay>
        </Link>
        {mouse.enter && (
          <YoutubeVideoPlayer videoId={id} height={height} width={width} />
        )}
      </Thumbnails>
    </div>
  );
};

export default memo(VideoThumbnails);
