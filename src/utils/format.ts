export const getViewFormat = (viewCount: string | number) => {
  if (typeof viewCount === 'string') {
    return Number(viewCount).toLocaleString('ko-KR');
  }
  return viewCount.toLocaleString('ko-KR');
};

export const getCountFormat = (count: string | number, digit: number) => {
  const intlCall = new Intl.NumberFormat('ko-KR', {
    notation: 'compact',
    maximumFractionDigits: digit,
  });
  if (typeof count === 'string') return intlCall.format(Number(count));
  return intlCall.format(count);
};

export const getTodayFormat = (date: Date | string) => {
  const newDate = new Date(date);
  const year = new Date(newDate).getFullYear();
  const month = ('0' + (1 + newDate.getMonth())).slice(-2);
  const day = ('0' + newDate.getDate()).slice(-2);
  return year + '. ' + month + '. ' + day;
};
