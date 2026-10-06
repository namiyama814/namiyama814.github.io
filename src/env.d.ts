/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_COUNTRY_API_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
