export type YoutubeVideoInfo = {
  items: YoutubeVideo[];
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
};

export type YoutubeVideoSnippet = {
  description: string;
  publishedAt: string;
  channelId: string;
  title: string;
  thumbnails: {
    default: {
      url: string;
      width: number;
      height: number;
    };
    high: {
      url: string;
      width: number;
      height: number;
    };
    standard: {
      url: string;
      width: number;
      height: number;
    };
    medium: {
      url: string;
      width: number;
      height: number;
    };
    maxres: {
      url: string;
      width: number;
      height: number;
    };
  };
  channelTitle: string;
};

export type YoutubeChannel = {
  id: string;
  snippet: {
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
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
