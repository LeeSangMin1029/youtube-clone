import { useUserContext } from '@/context/UserContext';
import { YoutubeVideoInfo, VideoParams } from '@/@types/youtube';
import { fetchPostVideos, videoKeys } from '@/utils';
import { useInfiniteQuery } from 'react-query';

export const useFetchVideo = (params: VideoParams) => {
  const {
    user: { googleID },
  } = useUserContext();

  return useInfiniteQuery({
    queryKey: [...videoKeys.lists(), googleID, params],
    queryFn: async ({ pageParam = null }) => {
      params.pageToken = pageParam;
      return await fetchPostVideos<YoutubeVideoInfo>({ googleID, params });
    },
    getNextPageParam: (lastPage) => lastPage?.nextPageToken,
    refetchOnWindowFocus: false,
    retry: 0,
    staleTime: 120 * 1000,
    enabled: googleID !== '',
    suspense: true,
  });
};
