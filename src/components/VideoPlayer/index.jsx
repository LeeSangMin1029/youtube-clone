import { useLocation } from "react-router-dom";
import parse from "html-react-parser";
import { VideoView } from "./styles";

const VideoPlayer = () => {
  const location = useLocation();
  const { player } = location.state;
  const { embedHtml } = player;
  const parseToComponent = (html) => parse(html);
  return <VideoView>{parseToComponent(embedHtml)}</VideoView>;
};

export default VideoPlayer;
