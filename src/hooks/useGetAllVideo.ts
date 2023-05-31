import { useVideos } from './useVideos';

export const useGetAllVideo = () =>
  useVideos({ maxResults: 5, chart: 'mostPopular' });
