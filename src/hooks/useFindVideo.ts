import { useSearchParams } from 'react-router-dom';
import { useFetchVideo } from './useFetchVideo';

export const useFindVideo = () => {
  const [params] = useSearchParams();
  const id = params.get('id');
  const { videos } = useFetchVideo({ maxResults: 5, chart: 'mostPopular' });
  const findVideo = videos.find((video) => video.id === id);
  return findVideo;
};
