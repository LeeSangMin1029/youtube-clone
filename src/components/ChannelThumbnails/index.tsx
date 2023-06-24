import { Image } from './styles';
import { YoutubeCommonThumbnails } from '@/@types/youtube';

type ChannelThumbnailsProps = {
  width: string;
  height: string;
  alt: string;
  source: YoutubeCommonThumbnails;
};

const ChannelThumbnails = ({
  width,
  height,
  source,
}: ChannelThumbnailsProps) => {
  return (
    <Image
      width={width}
      height={height}
      src={source.default.url || source.high.url}
    />
  );
};

export default ChannelThumbnails;
