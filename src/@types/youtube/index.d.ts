export type QualityOptions = {
  url: string;
  width: number;
  height: number;
};

export type YoutubeVideoInfo = {
  items: YoutubeVideo[];
  nextPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
};

export type YoutubeCommonThumbnails = {
  default: QualityOptions;
  medium: QualityOptions;
  high: QualityOptions;
};

export type YoutubeVideoThumbnails = YoutubeCommonThumbnails & {
  standard: QualityOptions;
  maxres: QualityOptions;
};

export type YoutubeVideoSnippet = {
  description: string;
  publishedAt: string;
  channelId: string;
  title: string;
  thumbnails: YoutubeVideoThumbnails;
  channelTitle: string;
};

export type YoutubeChannel = {
  id: string;
  snippet: {
    thumbnails: YoutubeCommonThumbnails;
  };
  statistics: {
    subscriberCount: number;
  };
};

export type YoutubeVideo = {
  id: string;
  snippet: YoutubeVideoSnippet;
  channel: YoutubeChannel;
  statistics: {
    viewCount: string;
  };
  player: {
    embedHtml: string;
    embedHeight: string;
    embedWidth: string;
  };
};

export type VideoParams = {
  maxResults?: number;
  id?: string[];
  chart?: 'mostPopular';
  pageToken?: string;
};
