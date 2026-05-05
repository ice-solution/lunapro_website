/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly FRONTEND_URL?: string;
  readonly WHATSAPP_PHONE?: string;

  // 保留 Vite 慣例前綴（若你未來改用 VITE_* 亦可直接用）
  readonly VITE_FRONTEND_URL?: string;
  readonly VITE_WHATSAPP_PHONE?: string;

  /** 網站正式網址（唔要有結尾斜線），Build 時寫入 index.html og:image，例如 https://lunaskin.brandactivation.hk */
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

