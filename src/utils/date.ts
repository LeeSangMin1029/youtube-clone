export const getOnlyDate = (date: string | Date) =>
  typeof date === 'string' ? new Date(date) : date;
