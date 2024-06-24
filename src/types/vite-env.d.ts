/// <reference types="vite/client" />

type ImportMetaEnv = {
  readonly VITE_LOCAL_PORT: number;
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};
