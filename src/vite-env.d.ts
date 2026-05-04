/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_URL?: string;
}

interface Window {
  dataLayer?: Array<Record<string, unknown>>;
  gtag?: (...args: unknown[]) => void;
  plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void;
}
