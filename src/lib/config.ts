const trim = (v: string) => v.replace(/\/+$/, "");

export const APP_URL = trim(process.env.NEXT_PUBLIC_APP_URL || "https://app.tiisha.com");
export const SITE_URL = trim(process.env.NEXT_PUBLIC_SITE_URL || "https://tiisha.com");
/** Store links. Empty means the app is not in that store yet, and the site shows "Coming soon" instead of a dead link. */
const store = (v: string | undefined) => {
  const url = (v || "").trim();
  return /^https:\/\//.test(url) ? url : "";
};
export const APP_STORE_URL = store(process.env.NEXT_PUBLIC_APP_STORE_URL);
export const PLAY_STORE_URL = store(process.env.NEXT_PUBLIC_PLAY_STORE_URL);
export const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID || "";

export const links = {
  signup: `${APP_URL}/signup`,
  signin: `${APP_URL}/signin`,
  apply: `${APP_URL}/tutor/apply`,
};

export const SITE_NAME = "Tiisha";
