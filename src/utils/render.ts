import { YoutubeVideoItem } from '@/@types/youtube';
import { getOnlyDate } from './date';
import crypto from 'crypto';

export const getDateSinceUpload = (date: string | Date) => {
  const milliSeconds = new Date().getTime() - getOnlyDate(date).getTime();

  const seconds = milliSeconds / 1000;
  if (seconds < 60) return `방금 전`;

  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;

  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;

  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}일 전`;

  const weeks = days / 7;
  if (weeks < 5) return `${Math.floor(weeks)}주 전`;

  const months = days / 30;
  if (months < 12) return `${Math.floor(months)}개월 전`;

  const years = days / 365;
  return `${Math.floor(years)}년 전`;
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
