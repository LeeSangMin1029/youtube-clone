import { memo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import { useMouseHandler } from '@/hooks';
import YoutubeVideoPlayer from '@/components/YoutubeVideoPlayer';

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
  useEffect(() => {
    if (!mouse.leave && mouse.up) {
      targetLink(`/watch?id=${id}`);
    }
  }, [mouse.leave, mouse.up]);

  return (
    <StyledDiv {...handler}>
      <InteractStyled mouse={mouse}>
        <div className="border" />
        <div className="background" />
      </InteractStyled>
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
