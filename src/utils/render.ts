import { YoutubeVideoItem } from '@/@types/youtube';
import { getSinceSeconds, dateFormat } from './date';
import crypto from 'crypto';

export const getDateSinceUpload = (date: string | Date) => {
  const seconds = getSinceSeconds(date);
  const since = dateFormat.filter((v) => seconds / v.divide < v.compare)[0];
  return `${Math.floor(seconds / since.divide)}${since.unit} 전`;
};

export const randomKey = () =>
  typeof window !== 'undefined'
    ? window.crypto.randomUUID()
    : crypto.randomUUID();

export const getVideoInfo = (video: YoutubeVideoItem) => {
  const { id, player, snippet, channel, statistics: vStatic } = video || {};
  const { title } = snippet || {};
  const { embedWidth, embedHeight } = player || {};
  const { statistics: cStatic } = channel || {};
  return {
    title,
    videoId: id,
    videoSrc: channel?.snippet?.thumbnails?.medium?.url,
    description: snippet?.description,
    channelId: `https://www.youtube.com/channel/${channel?.id}`,
    width: embedWidth,
    height: embedHeight,
    viewCount: vStatic?.viewCount,
    subscriberCount: cStatic?.subscriberCount,
    channelTitle: snippet?.channelTitle,
    publishedAt: snippet?.publishedAt,
  };
};
