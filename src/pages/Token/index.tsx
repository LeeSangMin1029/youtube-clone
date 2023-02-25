const Token = () => {
  const channel = new BroadcastChannel('authToken');
  const query = new URLSearchParams(window.location.search);
  const accessToken = query.get('accessToken');
  const refreshToken = query.get('refreshToken');
  const newExpirationDate = () => {
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    return expiration;
  };
  const expirationDate = newExpirationDate();
  const info = { accessToken, refreshToken, expirationDate };
  channel.postMessage(info);
  window.close();
  return <></>;
};

export default Token;
