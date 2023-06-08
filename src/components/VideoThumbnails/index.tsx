import { YoutubeVideoThumbnails } from '@/@types/youtube';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import VideoDuration from '@/components/VideoDuration';
import { Thumbnails } from './styles';

type VideoThumbnailsProps = {
  id: string;
  thumbnails: YoutubeVideoThumbnails;
  duration: string;
};

const VideoThumbnails = memo(
  ({ id, thumbnails, duration }: VideoThumbnailsProps) => {
    return (
      <Thumbnails>
        <Link to={`/watch?id=${id}`}>
          <img
            src={thumbnails?.maxres?.url || thumbnails?.high?.url}
            alt="thumbnails"
          />
          <VideoDuration duration={duration} />
        </Link>
      </Thumbnails>
    );
  },
);

export default VideoThumbnails;
