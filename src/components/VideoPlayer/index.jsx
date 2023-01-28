import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import parse from "html-react-parser";
import { VideoView } from "./styles";

const useVideo = (videoId) => {
  const [video, setVideo] = useState({ html: "", thumbnails: {} });
  const fetchVideoData = useCallback(async (id) => {
    const KEY = "AIzaSyAD9cDA4VH2MKgN3stX0hbe5xtOhIX2yNs";
    const PARAM = "&maxHeight=713&maxWidth=1268&autoplay=1";
    const HREF = "https://www.googleapis.com/youtube/v3/videos";
    const request = `${HREF}?part=snippet,player&id=${id}&key=${KEY}${PARAM}`;
    const fetchedData = await fetch(request);
    const { items } = await fetchedData.json();
    const { player, snippet } = items[0];
    setVideo({
      ...video,
      html: player.embedHtml,
      thumbnails: snippet.thumbnails,
    });
    return video;
  }, []);
  useEffect(() => {
    fetchVideoData(videoId);
  }, [fetchVideoData]);
  return video;
};

const VideoPlayer = () => {
  let [searchParams] = useSearchParams();
  const videoId = () => searchParams.get("id");
  const video = useVideo(videoId());
  const parseToComponent = (html) => parse(html);
  return <VideoView>{parseToComponent(video.html)}</VideoView>;
};

export default VideoPlayer;
