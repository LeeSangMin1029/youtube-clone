import { YoutubeVideoThumbnails } from '@/@types/youtube';
import { MouseState } from '@/@types/global';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Overlay, Thumbnails } from './styles';
import { getDuration } from '@/utils';

type VideoThumbnailsProps = {
  id: string;
  thumbnails: YoutubeVideoThumbnails;
  duration: string;
  mouse: MouseState;
};

const VideoThumbnails = memo(
  ({ id, thumbnails, duration, mouse }: VideoThumbnailsProps) => {
    return (
      <Thumbnails mouse={mouse}>
        <Link to={`/watch?id=${id}`}>
          <img
            src={thumbnails?.maxres?.url || thumbnails?.high?.url}
            alt="thumbnails"
          />
          <Overlay>{getDuration(duration)}</Overlay>
        </Link>
      </Thumbnails>
    );
  },
);

export default VideoThumbnails;
