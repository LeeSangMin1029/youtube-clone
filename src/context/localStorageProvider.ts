export const localStorageProvider = () => {
  const map = new Map(
    JSON.parse(localStorage.getItem("youtube-api-data") || "[]")
  );
  window.addEventListener("beforeunload", () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem("youtube-api-data", appCache);
  });
  return map;
};
