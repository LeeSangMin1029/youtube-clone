import ErrorBoundarySuspense from '@/components/ErrorBoundarySuspense';
import { StyledBoard, RecommendVideoList, MainContent } from './styles';
import { lazy } from 'react';
import { LoadingSpinner } from '@/assets';
import Fallback from '@/components/Fallback';

const VideoPlayer = lazy(() => import('@/components/VideoPlayer'));

const Watch = () => {
  return (
    <StyledBoard>
      <ErrorBoundarySuspense Fallback={Fallback} Loading={<LoadingSpinner />}>
        <MainContent>
          <VideoPlayer />
        </MainContent>
      </ErrorBoundarySuspense>
      <RecommendVideoList>추천 동영상 및 관련 동영상</RecommendVideoList>
    </StyledBoard>
  );
};

export default Watch;
