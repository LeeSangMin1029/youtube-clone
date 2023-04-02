export const openSignInWindow = (url: string, name: string): void => {
  const strWindowFeatures =
    'toolbar=no, menubar=no, width=600, height=700, top=100, left=100';
  let windowObjectReference = window.open(url, name, strWindowFeatures);
  windowObjectReference?.focus();
};
