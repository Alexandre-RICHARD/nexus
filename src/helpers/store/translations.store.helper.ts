import { languageToCode } from "../../dictionnaries/languageToCode.dictionnary";
import type { LanguageEnum } from "../../enums/language.enum";
import type { LanguageCodeEnum } from "../../enums/languageCode.enum";
import { CookieHelper } from "../cookie.helper";
import { InvertHelper } from "../invert.helper";

export const TranslationsStoreHelper = {
  languageInitiator: (
    supportedLanguages: LanguageEnum[],
    cookieName: string,
    defaultLanguage: LanguageEnum,
  ): LanguageCodeEnum => {
    let storedLanguage = CookieHelper.getCookie(cookieName) as LanguageCodeEnum;
    const storedLanguageName = InvertHelper.getInvertObject(languageToCode)[
      storedLanguage
    ] as LanguageEnum;

    if (
      !TranslationsStoreHelper.isSupportedLanguage(
        supportedLanguages,
        storedLanguageName,
      )
    ) {
      storedLanguage = languageToCode[defaultLanguage] as LanguageCodeEnum;
      CookieHelper.setCookie(cookieName, storedLanguage, 24 * 365 * 100);
    }
    return storedLanguage;
  },

  isSupportedLanguage: (
    supportedLanguages: LanguageEnum[],
    language?: LanguageEnum,
  ): boolean => {
    if (!language) return false;

    return supportedLanguages.includes(language);
  },
};
