export type YoutubeVideoList = {
  items: YoutubeVideo[];
};

export type YoutubeVideo = {
  id: string;
  channel: {
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
  snippet: {
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
  statistics: {
    viewCount: string;
  };
  player: {
    embedHtml: string;
    embedHeight: string;
    embedWidth: string;
  };
};
