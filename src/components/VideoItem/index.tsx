import { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  VideoDetails,
  Description,
  YoutuberData,
  StyledDiv,
  InteractStyled,
} from './styles';
import { YoutubeVideo } from '@/@types/youtube';
import ViewsWithDate from '@/components/ViewsWithDate';
import VideoThumbnails from '@/components/VideoThumbnails';

const VideoItem = memo(({ data }: { data: YoutubeVideo }) => {
  const {
    id,
    snippet,
    statistics: { viewCount },
    channel,
    contentDetails,
  } = data;
  const { channelId, channelTitle, title, thumbnails, publishedAt } = snippet;
  const channelHref = `https://www.youtube.com/channel/${channelId}`;
  const { url: channelThumb } = channel.snippet.thumbnails.default;

  return (
    <StyledDiv>
      <InteractStyled />
      <VideoThumbnails
        id={id}
        thumbnails={thumbnails}
        duration={contentDetails.duration}
      />
      <VideoDetails>
        <Link to={channelHref}>
          <img src={channelThumb} alt="testI" width="36px" height="36px" />
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
});

export default VideoItem;
