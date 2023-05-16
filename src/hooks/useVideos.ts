import useSWR, { Fetcher } from 'swr';
import { YoutubeVideoList } from '@/@types/youtube';
import { useUser } from './useUser';

export const useVideos = () => {
  const {
    user: { email, googleID },
  } = useUser();
  const fetcher: Fetcher<YoutubeVideoList> = (url: string) =>
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, googleID }),
    }).then((res) => res.json());
  const { data, isLoading } = useSWR<YoutubeVideoList>(
    email && googleID ? 'api/youtube/videos' : null,
    fetcher,
    { revalidateOnFocus: false },
  );
  let videos = null;
  if (data) videos = data.items;
  return {
    videos,
    isLoading,
  };
};
