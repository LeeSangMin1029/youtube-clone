import { DisplayGrid, GridRow, MarginContent } from "./styles";
import VideoItem from "@/components/VideoItem";

const VideoList = () => {
  return (
    <MarginContent>
      <DisplayGrid>
        {Array.from(Array(5).keys()).map((_, id) => (
          <GridRow key={id}>
            {Array.from(Array(5).keys()).map((_, id1) => (
              <VideoItem key={id1} />
            ))}
          </GridRow>
        ))}
      </DisplayGrid>
    </MarginContent>
  );
};

export default VideoList;
