export const videoKeys = {
  lists: () => ['video', 'list'] as const,
  list: (filters: string) => [...videoKeys.lists(), { filters }] as const,
};
