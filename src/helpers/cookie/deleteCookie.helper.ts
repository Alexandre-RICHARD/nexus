import { checkCookie } from "./checkCookie.helper";
import { setCookie } from "./setCookie.helper";

export const deleteCookie = (name: string): void => {
  if (checkCookie(name)) {
    setCookie(name, "", -1);
  }
};
