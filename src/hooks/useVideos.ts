import { YoutubeVideoList } from '@/@types/youtube';
import { useUserContext } from '@/context/UserContext';
import { useQuery } from 'react-query';

type VideoParams = {
  results?: number;
  id?: string;
};

export const useVideos = (params: VideoParams, nextToken: string) => {
  const {
    user: { googleID },
  } = useUserContext();
  const getVideos = async (
    googleID: string,
    token: string,
  ): Promise<YoutubeVideoList> =>
    await fetch('/api/youtube/videos', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ googleID, params }),
    }).then((fetched) => fetched.json());
  const { data } = useQuery({
    queryKey: ['videos', nextToken],
    queryFn: async () => await getVideos(googleID, nextToken),
    refetchOnWindowFocus: false,
    retry: 0,
    enabled: !!googleID,
  });
  return { videos: data?.items };
};
