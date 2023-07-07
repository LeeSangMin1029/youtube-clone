import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoDetails, Description, YoutuberData, StyledDiv } from './styles';
import { YoutubeVideo } from '@/@types/youtube';
import ViewsWithDate from '@/components/ViewsWithDate';
import VideoThumbnails from '@/components/VideoThumbnails';
import ChannelThumbnails from '@/components/Thumbnails';
import CustomLink from '@/components/CustomLink';
import AnimateElement from '@/components/AnimateElement';

type VideoItemProps = {
  data: YoutubeVideo;
};

const VideoItem = ({ data }: VideoItemProps) => {
  const {
    id,
    snippet,
    statistics: { viewCount },
    channel,
    contentDetails,
  } = data;
  const { channelId, channelTitle, title, thumbnails, publishedAt } = snippet;
  const channelHref = `https://www.youtube.com/channel/${channelId}`;
  const channelThumbnails = channel?.snippet?.thumbnails;
  const targetLink = useNavigate();
  const onClick = () => {
    targetLink(`/watch?id=${id}`);
  };

  return (
    <AnimateElement
      StyledComp={StyledDiv}
      onClick={onClick}
      interact={'afterdown'}
    >
      <VideoThumbnails
        id={id}
        thumbnails={thumbnails}
        duration={contentDetails.duration}
      />
      <VideoDetails>
        <ChannelThumbnails
          source={channelThumbnails.default.url || channelThumbnails.high.url}
          alt={channelTitle}
          width="36px"
          height="36px"
          to={channelHref}
        />
        <Description>
          <h3>
            <CustomLink to={`/watch?id=${id}`}>{title}</CustomLink>
          </h3>
          <YoutuberData>
            <CustomLink to={channelHref}>{channelTitle}</CustomLink>
            <ViewsWithDate
              view={viewCount}
              publishedAt={publishedAt}
              isExtend={false}
              delimiters={true}
            />
          </YoutuberData>
        </Description>
      </VideoDetails>
    </AnimateElement>
  );
};

export default memo(VideoItem);
