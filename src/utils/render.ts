import crypto from 'crypto';

export const displayedAt = (createdAt = new Date()) => {
  const milliSeconds = new Date().getTime() - createdAt.getTime();

  const seconds = milliSeconds / 1000;
  if (seconds < 60) return `방금 전`;

  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;

  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;

  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}일 전`;

  const weeks = days / 7;
  if (weeks < 5) return `${Math.floor(weeks)}주 전`;

  const months = days / 30;
  if (months < 12) return `${Math.floor(months)}개월 전`;

  const years = days / 365;
  return `${Math.floor(years)}년 전`;
};

export const randomKey = () =>
  typeof window !== 'undefined'
    ? window.crypto.randomUUID()
    : crypto.randomUUID();

export const commaCheck = (digit: number) => (digit ? '.' + digit : '');
export const units = [
  { unit: '4', type: '천', sub: 0 },
  { unit: '5', type: '만', sub: 0 },
  { unit: '9', type: '억', sub: 0 },
  { unit: '6 7 8', type: '만', sub: 4 },
  { unit: '10 11 12', type: '억', sub: 8 },
];

export const formatingDigit = (str: string) => {
  if (str.length <= 3) return str;
  const { type, sub } = units.filter(({ unit }) =>
    unit.includes(String(str.length)),
  )[0];
  let subString = !sub
    ? commaCheck(Number(str[1]) - 48)
    : str.substring(1, str.length - sub);
  return str[0] + subString + type;
};
