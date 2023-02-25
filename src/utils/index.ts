import crypto from 'crypto';
export { worker } from './worker';
export { envConfig } from './env';

export const openSignInWindow = (url: string, name: string): void => {
  const strWindowFeatures =
    'toolbar=no, menubar=no, width=600, height=700, top=100, left=100';
  let windowObjectReference = window.open(url, name, strWindowFeatures);
  windowObjectReference?.focus();
};

export const divideArrays = <T>(arr: T[], chunkSize: number) => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
};

export const randomKey = () =>
  typeof window !== 'undefined'
    ? window.crypto.randomUUID()
    : crypto.randomUUID();

export const generateParams = (params = {}) =>
  Object.entries(params).reduce((acc, cur) => acc + `&${cur[0]}=${cur[1]}`, '');

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

export const isEmptyObject = (param: Object) =>
  Object.keys(param).length === 0 && param.constructor === Object;

export const isEmptyArray = (arr: []) => Array.isArray(arr) && arr.length === 0;
