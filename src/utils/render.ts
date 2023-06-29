import { YoutubeVideo } from '@/@types/youtube';
import { CountFormatOptions, RenderFormat } from '@/@types/global';
import { getSinceSeconds, dateFormat } from './date';
import crypto from 'crypto';
import { getViewFormat } from './format';

export const renderDateSinceUpload = (date: string | Date) => {
  const seconds = getSinceSeconds(date);
  const since = dateFormat.filter((v) => seconds / v.divide < v.compare)[0];
  return `${Math.floor(seconds / since.divide)}${since.unit} 전`;
};

export const renderViewFormat = (
  render: RenderFormat,
  options: CountFormatOptions,
) => {
  const formattedNumber = getViewFormat(options);
  if (render === 'view') return `조회수 ${formattedNumber}회`;
  else if (render === 'subscription') return `구독자 ${formattedNumber}명`;
};

export const randomKey = () =>
  typeof window !== 'undefined'
    ? window.crypto.randomUUID()
    : crypto.randomUUID();

export const getVideoInfo = (video: YoutubeVideo) => {
  const { id, player, snippet, channel, statistics: vStatic } = video || {};
  const { title } = snippet || {};
  const { embedWidth, embedHeight, embedHtml } = player || {};
  const { statistics: cStatic } = channel || {};
  return {
    title,
    videoId: id,
    thumbnails: channel?.snippet?.thumbnails,
    description: snippet?.description,
    channelId: `https://www.youtube.com/channel/${channel?.id}`,
    width: embedWidth,
    height: embedHeight,
    viewCount: vStatic?.viewCount,
    subscriberCount: cStatic?.subscriberCount,
    channelTitle: snippet?.channelTitle,
    publishedAt: snippet?.publishedAt,
    html: embedHtml,
    channel,
    commentCount: vStatic?.commentCount,
  };
};
