export const getGoogleWithYoutubeData = async (reqConfig: RequestInit) => {
  const googleFetched = await fetch(
    `https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,photos`,
    reqConfig,
  );

  const youtubeFetched = await fetch(
    'https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true',
    reqConfig,
  );

  const googleData = await googleFetched.json();
  const youtubeData = await youtubeFetched.json();
  return { googleData, youtubeData };
};
