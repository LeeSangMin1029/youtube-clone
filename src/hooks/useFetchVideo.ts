import useSWR from 'swr';
import { envConfig } from '@/config';

async function youtubeFetcher(url: string) {
  const fetched = await fetch(url);
  if (!fetched.ok) {
    const { error = {} } = await fetched.json();
    error.reason = error.errors[0].reason;
    delete error.errors;
    throw error;
  }
  return await fetched.json();
}

const swrConfig = {
  onErrorRetry: (
    error: any,
    key: string,
    _: any,
    revalidate: any,
    { retryCount }: { retryCount: number },
  ) => {
    if (error.status === 404) return;
    if (key === '/api/youtube/v3/videos?') return;
    if (retryCount >= 10) return;
    setTimeout(() => revalidate({ retryCount }), 10000);
  },
};

export const useFetchVideo = (
  videoId: string | null,
  width: string,
  height: string,
) => {
  const url = `/api/youtube/v3/videos?key=${envConfig.API_KEY}&id=${videoId}&part=player,snippet&maxWidth=${width}&maxHeight=${height}&fields=items(id,player,snippet(publishedAt,channelId,title,description))`;
  const { data, isLoading, error } = useSWR(url, youtubeFetcher, swrConfig);
  if (error) {
    console.error(error);
  }
  return { video: data?.items[0], isLoading };
};
