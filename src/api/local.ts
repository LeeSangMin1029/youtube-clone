export const authGoogleURL = async () => {
  try {
    const request = await fetch('https://localhost:5112/api/auth/google', {
      method: 'POST',
    });
    const response = await request.json();
    return response.url;
  } catch (error) {
    console.error(error);
  }
};
