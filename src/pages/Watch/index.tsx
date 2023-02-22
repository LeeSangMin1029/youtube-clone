import { StyledBoard, RecommendVideoList } from "./styles";
import VideoPlayer from "@/components/VideoPlayer";

const Watch = () => {
  return (
    <StyledBoard>
      <VideoPlayer></VideoPlayer>
      <RecommendVideoList>추천 동영상 및 관련 동영상</RecommendVideoList>
    </StyledBoard>
  );
};

export default Watch;
