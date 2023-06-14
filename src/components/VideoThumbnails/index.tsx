import { YoutubeVideoThumbnails } from '@/@types/youtube';
import { MouseState } from '@/@types/global';
import { ReactNode, memo } from 'react';
import { Link } from 'react-router-dom';
import { Overlay, Thumbnails } from './styles';
import { getDuration } from '@/utils';

type VideoThumbnailsProps = {
  id: string;
  thumbnails: YoutubeVideoThumbnails;
  duration: string;
  mouse: MouseState;
  children: ReactNode;
};

const VideoThumbnails = memo(
  ({ id, thumbnails, duration, mouse, children }: VideoThumbnailsProps) => {
    return (
      <Thumbnails mouse={mouse}>
        <Link to={`/watch?id=${id}`}>
          <img
            src={thumbnails?.maxres?.url || thumbnails?.high?.url}
            alt="thumbnails"
          />
          <Overlay>{getDuration(duration)}</Overlay>
        </Link>
        {children}
      </Thumbnails>
    );
  },
);

export default VideoThumbnails;
