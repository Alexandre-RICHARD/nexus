import { supportedLanguages } from "../../assets/resources/supportedLanguages";
import { CookieEnum } from "../../enums/cookie.enum";
import { LanguageEnum } from "../../enums/language.enum";
import { CookieHelper } from "../../helpers/cookie.helper";

export const TranslationsStoreHelper = {
  languageInitiator: (): LanguageEnum => {
    let storedLanguage = CookieHelper.getCookie(
      CookieEnum.LANG,
    ) as LanguageEnum;
    if (!TranslationsStoreHelper.isSupportedLanguage(storedLanguage)) {
      storedLanguage = LanguageEnum.ENGLISH;
      CookieHelper.setCookie(CookieEnum.LANG, storedLanguage, 24 * 365 * 100);
    }
    return storedLanguage;
  },

  isSupportedLanguage: (language: LanguageEnum): boolean => {
    const languageFound = supportedLanguages.find(
      (supportedLanguage) => supportedLanguage.key === language,
    );
    return languageFound?.isSupported ?? false;
  },
};
