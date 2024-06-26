import { CookieEnum } from "../../../../src/enums/cookie.enum";
import { LanguageEnum } from "../../enums/language.enum";
import { CookieHelper } from "../cookie.helper";

export const TranslationsStoreHelper = {
  languageInitiator: (supportedLanguages: LanguageEnum[]): LanguageEnum => {
    let storedLanguage = CookieHelper.getCookie(
      CookieEnum.LANG,
    ) as LanguageEnum;
    if (
      !TranslationsStoreHelper.isSupportedLanguage(
        supportedLanguages,
        storedLanguage,
      )
    ) {
      storedLanguage = LanguageEnum.ENGLISH;
      CookieHelper.setCookie(CookieEnum.LANG, storedLanguage, 24 * 365 * 100);
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
