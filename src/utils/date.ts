export const DIVIDE_DATE = {
  SECONDS: 60,
  MINUTES: 60,
  HOURS: 3600,
  DAYS: 86400,
  WEEKS: 604800,
  MONTHS: 2592000,
  YEARS: 31536000,
} as const;
type DIVIDE_DATE = (typeof DIVIDE_DATE)[keyof typeof DIVIDE_DATE];

export const dateFormat = [
  { compare: 1, unit: '방금', divide: DIVIDE_DATE.SECONDS },
  { compare: 60, unit: '분', divide: DIVIDE_DATE.MINUTES },
  { compare: 24, unit: '시간', divide: DIVIDE_DATE.HOURS },
  { compare: 7, unit: '일', divide: DIVIDE_DATE.DAYS },
  { compare: 5, unit: '주', divide: DIVIDE_DATE.WEEKS },
  { compare: 12, unit: '개월', divide: DIVIDE_DATE.MONTHS },
  { compare: 365, unit: '년', divide: DIVIDE_DATE.YEARS },
];

export const getSinceSeconds = (date: Date | string) =>
  (new Date().getTime() - new Date(date).getTime()) / 1000;
