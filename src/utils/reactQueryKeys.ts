export const videoKeys = {
  lists: () => ['video', 'list'] as const,
  list: (filters: string) => [...videoKeys.lists(), { filters }] as const,
};

export const playListKeys = {
  lists: () => ['play', 'list'] as const,
  list: (filters: string) => [...playListKeys.lists(), { filters }] as const,
};

export const channelListKeys = {
  lists: () => ['channel', 'list'] as const,
  list: (filters: string) => [...channelListKeys.lists(), { filters }] as const,
};

export const commentsKeys = {
  lists: () => ['comments', 'list'] as const,
  list: (filters: string) => [...commentsKeys.lists(), { filters }] as const,
};
