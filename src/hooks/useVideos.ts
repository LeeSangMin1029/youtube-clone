import useSWR from 'swr';
import { generateParams } from '@/utils';

const baseOption = {
  maxResults: '1',
  regionCode: 'kr',
};

const videosOption = {
  part: 'snippet,player,statistics',
  chart: 'mostPopular',
  maxWidth: '1280',
  maxHeight: '714',
  fields:
    'items(id,snippet(channelId,channelTitle,publishedAt,thumbnails(maxres),title),player,statistics(viewCount))',
};

const channelsOption = {
  part: 'snippet',
  fields: 'items(id,snippet(thumbnails(default)))',
};

const requestURL = () => {
  const apiPath = `/api/youtube/v3/`;
  const key = '?key=AIzaSyAD9cDA4VH2MKgN3stX0hbe5xtOhIX2yNs';
  return (resource: string, options: Object) => {
    const param = generateParams({ ...baseOption, ...options });
    return `${apiPath + resource + key + param}`;
  };
};

const channelIdParams = (items = []) =>
  items.reduce((acc, cur: any) => acc + cur.snippet.channelId + ',', '');

export const useVideos = (isNotCached = true) => {
  const fetcher = (input: RequestInfo, init: RequestInit) =>
    fetch(input, init).then((res) => res.json());
  const url = requestURL();
  const { data: video } = useSWR(
    isNotCached ? url('videos', videosOption) : null,
    fetcher,
  );
  const { data: cnthumb, isLoading } = useSWR(
    isNotCached && video
      ? [
          url('channels', {
            ...channelsOption,
            id: channelIdParams(video.items),
          }),
        ]
      : null,
    fetcher,
  );
  return {
    fetched: { videos: video?.items, channels: cnthumb?.items },
    isLoading,
  };
};
