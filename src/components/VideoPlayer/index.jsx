import { useSearchParams } from "react-router-dom";
import parse from "html-react-parser";
import { VideoView } from "./styles";
import { useFetchVideo } from "@/hooks";

const VideoPlayer = () => {
  const [params] = useSearchParams();
  const id = params.get("id");
  const { video } = useFetchVideo(id, "1280", "714");
  const { embedHtml } = video.player;
  const parseToComponent = (html) => parse(html);
  return <VideoView>{parseToComponent(embedHtml)}</VideoView>;
};

export default VideoPlayer;
