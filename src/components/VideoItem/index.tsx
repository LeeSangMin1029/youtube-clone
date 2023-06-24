import { memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { VideoDetails, Description, YoutuberData, StyledDiv } from './styles';
import { YoutubeVideo } from '@/@types/youtube';
import ViewsWithDate from '@/components/ViewsWithDate';
import VideoThumbnails from '@/components/VideoThumbnails';
import ChannelThumbnails from '@/components/ChannelThumbnails';

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
  const targetLink = useNavigate();
  const onClick = () => {
    targetLink(`/watch?id=${id}`);
  };

  return (
    <StyledDiv onClick={onClick}>
      <VideoThumbnails
        id={id}
        thumbnails={thumbnails}
        duration={contentDetails.duration}
      />
      <VideoDetails>
        <Link to={channelHref}>
          <ChannelThumbnails
            source={channel?.snippet?.thumbnails}
            alt={channelTitle}
            width="36px"
            height="36px"
          />
        </Link>
        <Description>
          <h3>
            <Link to={`/watch?id=${id}`}>{title}</Link>
          </h3>
          <YoutuberData>
            <a href={channelHref}>{channelTitle}</a>
            <ViewsWithDate
              view={viewCount}
              publishedAt={publishedAt}
              isExtend={false}
              delimiters={true}
            />
          </YoutuberData>
        </Description>
      </VideoDetails>
    </StyledDiv>
  );
};

export default memo(VideoItem);
