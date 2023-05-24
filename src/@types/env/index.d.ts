interface ImportMetaEnv {
  readonly VITE_HOST: string;
  readonly VITE_API_KEY: string;
  readonly VITE_ACCESS_SECRET_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
