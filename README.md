# youtube-clone

## 개요

**프로젝트 구성**

```html📦src
 ┣ 📂@types
 ┃ ┣ 📂database
 ┃ ┃ ┗ 📜index.d.ts
 ┃ ┣ 📂dispatch
 ┃ ┃ ┗ 📜index.d.ts
 ┃ ┣ 📂react-svg
 ┃ ┃ ┗ 📜index.d.ts
 ┃ ┗ 📂youtube
 ┃ ┃ ┗ 📜index.d.ts
 ┣ 📂assets
 ┃ ┣ 📜app_settings.svg
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
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂UserInteract
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂VideoItem
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂VideoList
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂VideoManagement
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┗ 📂VideoPlayer
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┣ 📂context
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜localStorageProvider.ts
 ┣ 📂database
 ┃ ┗ 📜index.ts
 ┣ 📂hooks
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜useFetchVideo.ts
 ┃ ┗ 📜useVideos.ts
 ┣ 📂pages
 ┃ ┣ 📂Home
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Token
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂Watch
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┣ 📂utils
 ┃ ┣ 📜env.ts
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜worker.ts
 ┣ 📂workers
 ┃ ┗ 📜index.ts
 ┣ 📜index.css
 ┗ 📜main.tsx
```
