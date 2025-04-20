export function getUrl() {
  return import.meta.env.PROD
    ? import.meta.env.VITE_FRONTEND_PROD_URL
    : import.meta.env.VITE_FRONTEND_DEV_URL;
}
