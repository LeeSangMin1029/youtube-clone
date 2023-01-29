import useSWR from "swr";
import { generateParams } from "@/utils";

const baseOption = {
  maxResults: "20",
  regionCode: "kr",
};

const videosOption = {
  part: "snippet,player,statistics",
  chart: "mostPopular",
  maxWidth: "344",
  maxHeight: "197",
  fields:
    "items(id,snippet(channelId,channelTitle,publishedAt,thumbnails(high),title), statistics(viewCount))",
};

const channelsOption = {
  part: "snippet",
  fields: "items(id,snippet(thumbnails(default)))",
};

const requestURL = () => {
  const apiPath = `/api/youtube/v3/`;
  const key = "?key=AIzaSyAD9cDA4VH2MKgN3stX0hbe5xtOhIX2yNs";
  return (resource, options) => {
    const param = generateParams({ ...baseOption, ...options });
    return `${apiPath + resource + key + param}`;
  };
};

const channelIdParams = (items = []) =>
  items.reduce((acc, cur) => acc + cur.snippet.channelId + ",", "");

export const useVideos = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const url = requestURL();
  const { data: video } = useSWR(url("videos", videosOption), fetcher);
  const { data: cnthumb, isLoading } = useSWR(
    video
      ? [
          url("channels", {
            ...channelsOption,
            id: channelIdParams(video.items),
          }),
        ]
      : null,
    fetcher
  );
  return {
    videoList: video?.items,
    cnthumbList: cnthumb?.items,
    isLoading,
  };
};
