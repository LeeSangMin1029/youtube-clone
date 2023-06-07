import { VideoParams } from '@/@types/youtube';
import { reportError, getErrorMessage } from '@/utils/errors';

type RequestParams = {
  params: VideoParams;
  googleID: string;
};

export const googleAuthentication = async () => {
  try {
    const request = await fetch('api/auth/google', {
      method: 'POST',
    });
    const response = await request.json();
    return response.url;
  } catch (error) {
    throw new Error(reportError({ message: getErrorMessage(error) }));
  }
};

export const fetchPostVideos = async <T>(
  options?: RequestParams,
): Promise<T> => {
  return await fetch(`/api/youtube/videos`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(options),
  }).then((fetched) => fetched.json());
};
