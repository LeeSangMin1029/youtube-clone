import { useSearchParams } from 'react-router-dom';
import { useVideos } from './useVideos';

export const useFindVideo = () => {
  const [params] = useSearchParams();
  const id = params.get('id');
  const { videos } = useVideos({ maxResults: 5, chart: 'mostPopular' });
  const findVideo = videos?.find((video) => video.id === id);
  return findVideo;
};
