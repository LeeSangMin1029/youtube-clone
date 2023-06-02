# youtube-clone

## 개요

기술 : react, typescript, indexedDB, react-query, webworker, vite

**프로젝트 구성**

```📦src
 ┣ 📂@types
 ┃ ┣ 📂database
 ┃ ┃ ┗ 📜index.d.ts
 ┃ ┣ 📂env
 ┃ ┃ ┗ 📜index.d.ts
 ┃ ┣ 📂global
 ┃ ┃ ┗ 📜index.d.ts
 ┃ ┣ 📂react-svg
 ┃ ┃ ┗ 📜index.d.ts
 ┃ ┗ 📂youtube
 ┃ ┃ ┗ 📜index.d.ts
 ┣ 📂assets
 ┃ ┣ 📜app_settings.svg
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜loading.svg
 ┃ ┣ 📜user_login_profile.svg
 ┃ ┣ 📜video_alarm.svg
 ┃ ┗ 📜video_upload.svg
 ┣ 📂components
 ┃ ┣ 📂App
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂BaseTemplates
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Content
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂ErrorBoundarySuspense
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Fallback
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂HashTag
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂LazyRouter
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Skeleton
 ┃ ┃ ┣ 📜Avatar.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┣ 📜User.tsx
 ┃ ┃ ┗ 📜Videos.tsx
 ┃ ┣ 📂UserAreaInfo
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂UserLoggedIn
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂UserLoggedOut
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂VideoDescription
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂VideoItem
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂VideoList
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂VideoManagement
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂VideoPlayer
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂Videos
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┗ 📂ViewsWithDate
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┣ 📂config
 ┃ ┗ 📜index.ts
 ┣ 📂context
 ┃ ┗ 📜UserContext.tsx
 ┣ 📂database
 ┃ ┗ 📜index.ts
 ┣ 📂hooks
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜useCreateUser.ts
 ┃ ┣ 📜useFindVideo.ts
 ┃ ┣ 📜useGetUser.ts
 ┃ ┣ 📜usePromise.ts
 ┃ ┣ 📜useVideos.ts
 ┃ ┗ 📜useWebWorker.ts
 ┣ 📂pages
 ┃ ┣ 📂Home
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Login
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂Watch
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┣ 📂styles
 ┃ ┗ 📜utils.ts
 ┣ 📂utils
 ┃ ┣ 📜checkDataType.ts
 ┃ ┣ 📜date.ts
 ┃ ┣ 📜encryption.ts
 ┃ ┣ 📜errors.ts
 ┃ ┣ 📜fetch.ts
 ┃ ┣ 📜format.ts
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜object.ts
 ┃ ┣ 📜regex.ts
 ┃ ┣ 📜render.ts
 ┃ ┣ 📜window.ts
 ┃ ┗ 📜worker.ts
 ┣ 📂worker
 ┃ ┗ 📜index.ts
 ┣ 📜index.css
 ┗ 📜main.tsx
```
