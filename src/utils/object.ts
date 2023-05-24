type ValueOfParmas = number | string | string[];
type Params = {
  [key: string]: ValueOfParmas;
};

export const splitArray = <T>(arr: T[], chunkSize: number) => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
};

export const objectToSementic = (param: Params) =>
  Object.keys(param)
    .map((key) => {
      return param[key];
    })
    .join('/');
