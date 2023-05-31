import { useSearchParams } from 'react-router-dom';
import { useGetAllVideo } from './useGetAllVideo';

export const useFindVideo = () => {
  const [params] = useSearchParams();
  const id = params.get('id');
  const { videos } = useGetAllVideo();
  const findVideo = videos?.find((video) => video.id === id);
  return findVideo;
};
