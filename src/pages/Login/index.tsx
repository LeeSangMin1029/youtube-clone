const Login = () => {
  const query = new URLSearchParams(window.location.search);
  const googleID = query.get('userID');
  const email = query.get('email');
  const name = query.get('name');
  const thumbnails = query.get('thumbnails');
  const userURL = query.get('userURL');
  const loginChannel = new BroadcastChannel('login');
  loginChannel.postMessage({ googleID, email, thumbnails, userURL, name });
  window.close();
  return <div> </div>;
};

export default Login;
