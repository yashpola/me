import { envUrls } from "../constants/UrlConstants";

export function getUrl() {
  return import.meta.env.PROD ? envUrls.PROD : envUrls.DEV;
}
