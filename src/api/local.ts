import { reportError, getErrorMessage } from '@/utils/errors';

export const authGoogleURL = async () => {
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
