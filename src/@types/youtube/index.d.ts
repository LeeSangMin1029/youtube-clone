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
    title: string;
    resourceId?: {
      channelId: string;
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
  contentDetails: {
    duration: string;
  };
  statistics: {
    viewCount: string;
    commentCount: string;
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
  videoId?: string[];

  allThreadsRelatedToChannelId?: string;
};

export type APIResource = 'videos' | 'playlists' | 'subscriptions' | 'comments';

export type YoutubePlayListsInfo = {
  items: YoutubePlayLists[];
};

export type YoutubePlayLists = {
  id: string;
  snippet: { title: string };
};

export type YoutubeChannelsList = {
  items: YoutubeChannel[];
};

export type YoutubeCommentsList = {
  items: CommentThread[];
};

export type CommentSnippet = {
  videoId: string;
  textDisplay: string;
  textOriginal: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  authorChannelUrl: string;
  authorChannelId: {
    value: string;
  };
  canRate: boolean;
  viewerRating: string;
  likeCount: number;
  publishedAt: string;
  updatedAt: string;
};

export type CommentThreadSnippet = {
  videoId: string;
  topLevelComment: {
    kind: string;
    etag: string;
    id: string;
    snippet: CommentSnippet;
  };
  canReply: boolean;
  totalReplyCount: number;
  isPublic: boolean;
};

export type CommentThread = {
  kind: string;
  etag: string;
  id: string;
  snippet: CommentThreadSnippet;
};
