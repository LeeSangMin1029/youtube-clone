import { YoutubeVideoList } from '@/@types/youtube';
import { useQuery } from 'react-query';

export const useVideos = (googleID: string, nextToken: string) => {
  const getVideos = async (
    googleID: string,
    token: string,
  ): Promise<YoutubeVideoList> =>
    await fetch('/api/youtube/videos', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ googleID }),
    }).then((fetched) => fetched.json());
  const { data } = useQuery({
    queryKey: ['videos', nextToken],
    queryFn: async () => await getVideos(googleID, nextToken),
    refetchOnWindowFocus: false,
    retry: 0,
    enabled: !!googleID,
  });
  const videos = data?.items;
  return { videos };
};
