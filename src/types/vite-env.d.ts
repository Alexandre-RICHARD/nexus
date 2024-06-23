/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOCAL_PORT: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
