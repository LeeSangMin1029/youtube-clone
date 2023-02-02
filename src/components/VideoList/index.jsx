import { DisplayGrid, GridRow, MarginContent } from "./styles";
import VideoItem from "@/components/VideoItem";
import { useVideos } from "@/hooks/useVideos";
import { divideArrays, randomKey } from "@/utils";

const VideoList = () => {
  const { videoList = [], cnthumbList = [], isLoading } = useVideos();
  if (isLoading) return <div>...Loading</div>;
  const mapOfList = divideArrays(videoList, 5);
  cnthumbList.forEach((thumb) => {
    videoList
      .filter((vItem) => vItem.snippet.channelId === thumb.id)
      .map((vItem) => {
        vItem.channel = thumb;
      });
  });
  return (
    <MarginContent>
      <DisplayGrid>
        {mapOfList.map((videoList) => (
          <GridRow key={randomKey()}>
            {videoList.map((videoData) => (
              <VideoItem key={randomKey()} videoData={videoData} />
            ))}
          </GridRow>
        ))}
      </DisplayGrid>
    </MarginContent>
  );
};

export default VideoList;
