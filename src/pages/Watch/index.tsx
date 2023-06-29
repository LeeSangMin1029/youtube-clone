import { StyledBoard, RecommendVideoList, MainContent } from './styles';
import { lazy } from 'react';

const VideoPlayer = lazy(() => import('@/components/VideoPlayer'));

const Watch = () => {
  return (
    <StyledBoard>
      <MainContent>
        <VideoPlayer />
      </MainContent>
      <RecommendVideoList>추천 동영상 및 관련 동영상</RecommendVideoList>
    </StyledBoard>
  );
};

export default Watch;
