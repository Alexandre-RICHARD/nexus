import { ExistHelper } from "./exist.helper";

export const CookieHelper = {
  getCookie: (name: string): string | undefined => {
    const decodedCookies = decodeURIComponent(document.cookie);
    const splitedCookies = decodedCookies
      .split(";")
      .map((cookie) => cookie.trim());
    const foundCookie = splitedCookies.find((cookie) => {
      return cookie.startsWith(`${name}=`);
    });
    if (foundCookie) {
      return foundCookie.substring(name.length + 1);
    }
    return undefined;
  },

  setCookie: (name: string, value: string, hours = 1): void => {
    let expires = "";
    if (hours) {
      const date = new Date();
      date.setTime(date.getTime() + hours * 60 * 60 * 1000);
      expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ""}${expires}; path=/`;
  },

  checkCookie: (name: string): boolean => {
    const cookie = CookieHelper.getCookie(name);
    return ExistHelper.isNotNullorUndefined(cookie);
  },

  deleteCookie: (name: string): void => {
    if (CookieHelper.checkCookie(name)) {
      CookieHelper.setCookie(name, "", -1);
    }
  },
};
