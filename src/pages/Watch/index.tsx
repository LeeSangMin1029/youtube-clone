import { StyledBoard, RecommendVideoList, MainContent } from './styles';
import VideoPlayer from '@/components/VideoPlayer';

const Watch = () => {
  return (
    <StyledBoard>
      <MainContent>
        <VideoPlayer></VideoPlayer>
      </MainContent>
      <RecommendVideoList>추천 동영상 및 관련 동영상</RecommendVideoList>
    </StyledBoard>
  );
};

export default Watch;
