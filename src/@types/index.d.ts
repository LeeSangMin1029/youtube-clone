type YoutubeVideoData = {
  id: string;
  snippet: any;
  statistics: Statistics;
  channel: Channel;
};

type Statistics = {
  viewCount: string;
};

type Channel = {
  id: string;
  snippet: any;
};
