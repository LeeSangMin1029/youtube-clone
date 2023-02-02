import crypto from "crypto";

export const divideArrays = (arr = [], chunkSize) => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
};

export const randomKey = () =>
  typeof window !== "undefined"
    ? window.crypto.randomUUID()
    : crypto.randomUUID();

export const generateParams = (params = {}) =>
  Object.entries(params).reduce((acc, cur) => acc + `&${cur[0]}=${cur[1]}`, "");
