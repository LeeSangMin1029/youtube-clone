import { YoutubeVideoThumbnails } from '@/@types/youtube';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Overlay, Thumbnails, InteractMargin } from './styles';
import { getDuration } from '@/utils';
import { useMouseHandler } from '@/hooks';
import YoutubeVideoPlayer from '@/components/YoutubeVideoPlayer';
import CoverInteract from '@/components/CoverInteract';

type VideoThumbnailsProps = {
  id: string;
  thumbnails: YoutubeVideoThumbnails;
  duration: string;
};

const VideoThumbnails = memo(
  ({ id, thumbnails, duration }: VideoThumbnailsProps) => {
    const { mouse, ...handler } = useMouseHandler();
    return (
      <>
        <CoverInteract {...handler} mouse={mouse} customCSS={InteractMargin} />
        <Thumbnails mouse={mouse}>
          <Link to={`/watch?id=${id}`}>
            <img
              src={thumbnails?.maxres?.url || thumbnails?.high?.url}
              alt="thumbnails"
            />
            <Overlay>{getDuration(duration)}</Overlay>
          </Link>
          {mouse.enter && (
            <YoutubeVideoPlayer videoId={id} height={194} width={344} />
          )}
        </Thumbnails>
      </>
    );
  },
);

export default VideoThumbnails;
