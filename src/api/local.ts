export const authGoogleURL = async () => {
  try {
    const request = await fetch('api/auth/google', {
      method: 'POST',
    });
    const response = await request.json();
    return response.url;
  } catch (error) {
    console.error(error);
  }
};
