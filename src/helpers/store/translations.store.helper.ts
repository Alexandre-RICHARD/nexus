import { LanguageEnum } from "../../enums/language.enum";
import { CookieHelper } from "../cookie.helper";

export const TranslationsStoreHelper = {
  languageInitiator: (
    supportedLanguages: LanguageEnum[],
    cookieName: string,
  ): LanguageEnum => {
    let storedLanguage = CookieHelper.getCookie(cookieName) as LanguageEnum;
    if (
      !TranslationsStoreHelper.isSupportedLanguage(
        supportedLanguages,
        storedLanguage,
      )
    ) {
      storedLanguage = LanguageEnum.ENGLISH;
      CookieHelper.setCookie(cookieName, storedLanguage, 24 * 365 * 100);
    }
    return storedLanguage;
  },

  isSupportedLanguage: (
    supportedLanguages: LanguageEnum[],
    language: LanguageEnum,
  ): boolean => {
    return supportedLanguages.includes(language);
  },
};
