import { Player } from './styles';

type YoutubeVideoPlayerProps = {
  height: string | number;
  width: string | number;
  videoId: string;
};

const YoutubeVideoPlayer = ({
  videoId,
  height,
  width,
}: YoutubeVideoPlayerProps) => {
  return (
    <Player
      className="player"
      videoId={videoId}
      iframeClassName=""
      opts={{
        height: `${height}px`,
        width: `${width}px`,
        playerVars: {
          iv_load_policy: 3,
          autohide: 0,
          autoplay: 1,
          mute: 1,
          controls: 1,
          modestbranding: 1,
          showinfo: 0,
          enablejsapi: 1,
          fs: 0,
        },
      }}
    />
  );
};
export default YoutubeVideoPlayer;
