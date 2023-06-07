import { YoutubeVideoInfo } from '@/@types/youtube';
import { useUserContext } from '@/context/UserContext';
import { useQuery } from 'react-query';

type VideoParams = {
  maxResults?: number;
  id?: string[];
  chart?: 'mostPopular';
};

export const useVideos = (vParams: VideoParams) => {
  const {
    user: { googleID },
  } = useUserContext();
  const getVideos = async (
    googleID: string,
    params: VideoParams,
  ): Promise<YoutubeVideoInfo> => {
    return await fetch(`/api/youtube/videos`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ googleID, params }),
    }).then((fetched) => fetched.json());
  };

  const { data } = useQuery({
    queryKey: ['videos', googleID, vParams],
    queryFn: async () => await getVideos(googleID, vParams),
    refetchOnWindowFocus: false,
    retry: 0,
    staleTime: 120 * 1000,
    enabled: googleID !== '',
    suspense: true,
  });
  return { videos: data?.items };
};
