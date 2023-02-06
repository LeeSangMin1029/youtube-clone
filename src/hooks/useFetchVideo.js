import useSWR from "swr";
import { envConfig } from "@/utils";

async function youtubeFetcher(url) {
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
  onErrorRetry: (error, key, _, revalidate, { retryCount }) => {
    if (error.status === 404) return;
    if (key === "/api/youtube/v3/videos?") return;
    if (retryCount >= 10) return;
    setTimeout(() => revalidate({ retryCount }), 10000);
  },
};

// id가 없다면 기본 옵션으로 mostPopular 설정
export const useFetchVideo = (videoId, width = "", height = "") => {
  const url = `/api/youtube/v3/videos?key=${envConfig.API_KEY}&id=${videoId}&part=player,snippet&maxWidth=${width}&maxHeight=${height}&fields=items(id,snippet(publishedAt,channelId,title,description),player)`;
  const { data, error } = useSWR(url, youtubeFetcher, swrConfig);
  if (error) {
    console.error(error);
  }
  return { video: data?.items[0] };
};
