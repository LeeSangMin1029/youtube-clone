import { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  Thumbnails,
  VideoDetails,
  Description,
  YoutuberData,
  StyledDiv,
  InteractStyled,
} from './styles';
import { displayedAt, getCountFormat } from '@/utils';
import { YoutubeVideo } from '@/@types/youtube';

const VideoItem = memo(({ data }: { data: YoutubeVideo }) => {
  const {
    id,
    snippet,
    statistics: { viewCount },
    channel,
  } = data;
  const {
    channelId,
    channelTitle,
    title,
    thumbnails: vThumb,
    publishedAt,
  } = snippet;
  const channelHref = `https://www.youtube.com/channel/${channelId}`;
  const { url: channelThumb } = channel.snippet.thumbnails.default;

  return (
    <StyledDiv>
      <InteractStyled />
      <Thumbnails>
        <Link to={`/watch?id=${id}`}>
          <img src={vThumb?.maxres?.url} alt="thumbnails" />
        </Link>
      </Thumbnails>
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
            <div>
              <span>조회수 {getCountFormat(viewCount, 0)}회</span>
              <span>{displayedAt(new Date(publishedAt))}</span>
            </div>
          </YoutuberData>
        </Description>
      </VideoDetails>
    </StyledDiv>
  );
});

export default VideoItem;
