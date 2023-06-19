import { memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { VideoDetails, Description, YoutuberData, StyledDiv } from './styles';
import { YoutubeVideo } from '@/@types/youtube';
import ViewsWithDate from '@/components/ViewsWithDate';
import VideoThumbnails from '@/components/VideoThumbnails';
import { useMouseHandler } from '@/hooks';
import YoutubeVideoPlayer from '@/components/YoutubeVideoPlayer';
import CoverInteract from '@/components/CoverInteract';

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
  const { url: channelThumb } = channel.snippet.thumbnails.default;
  const { mouse, ...handler } = useMouseHandler();
  const targetLink = useNavigate();
  const onClick = () => {
    targetLink(`/watch?id=${id}`);
  };

  return (
    <StyledDiv {...handler} onClick={onClick}>
      <CoverInteract mouse={mouse} variant="rect" />
      <VideoThumbnails
        id={id}
        thumbnails={thumbnails}
        duration={contentDetails.duration}
        mouse={mouse}
      >
        {mouse.enter && (
          <YoutubeVideoPlayer videoId={id} height={194} width={344} />
        )}
      </VideoThumbnails>
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
};

export default memo(VideoItem);
