import { StyledYTPlayer } from './styles';

type PlayerProps = {
  videoId: string;
  height: string;
  width: string;
};

const Player = ({ videoId, height, width }: PlayerProps) => {
  return (
    <StyledYTPlayer
      className="player"
      videoId={videoId}
      opts={{
        height,
        width,
        playerVars: {
          autoplay: 1,
          mute: 1,
          showinfo: 0,
          autohide: 1,
        },
      }}
    />
  );
};

export default Player;
