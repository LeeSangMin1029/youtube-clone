export const isEmptyObject = (param: Object) =>
  Object.keys(param).length === 0 && param.constructor === Object;

export const isEmptyArray = (arr: []) => Array.isArray(arr) && arr.length === 0;
