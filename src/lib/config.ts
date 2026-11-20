const trim = (v: string) => v.replace(/\/+$/, "");

export const APP_URL = trim(process.env.NEXT_PUBLIC_APP_URL || "https://app.tiisha.com");
export const SITE_URL = trim(process.env.NEXT_PUBLIC_SITE_URL || "https://tiisha.com");
export const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID || "";

export const links = {
  signup: `${APP_URL}/signup`,
  signin: `${APP_URL}/signin`,
  apply: `${APP_URL}/tutor/apply`,
};

export const SITE_NAME = "Tiisha";
export const COOKIE_NAME = "tiisha_market";
