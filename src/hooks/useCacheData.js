import { useSWRConfig } from "swr";
import { isEmptyArray } from "@/utils";

export const useCacheData = (key) => {
  const { cache } = useSWRConfig();
  const cached = cache.get(key) || [];
  const state = !isEmptyArray(cached);
  return { cached: state ? cached : [], state, cache };
};
