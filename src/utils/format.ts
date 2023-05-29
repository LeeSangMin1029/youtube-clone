import { CountFormatOptions } from '@/@types/global';

const LANGUAGE = {
  korea: 'ko-KR',
} as const;
type LANGUAGE = (typeof LANGUAGE)[keyof typeof LANGUAGE];

export const getViewFormat = ({ source, digit }: CountFormatOptions) =>
  new Intl.NumberFormat(LANGUAGE.korea, {
    notation: digit === undefined ? 'standard' : 'compact',
    maximumFractionDigits: digit,
  }).format(Number(source));

export const getTodayFormat = (date: Date | string | number) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = ('0' + (1 + newDate.getMonth())).slice(-2);
  const day = ('0' + newDate.getDate()).slice(-2);
  return `${year}. ${month}. ${day}.`;
};
