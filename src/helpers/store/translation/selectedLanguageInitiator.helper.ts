import { languageToCode } from "../../../dictionnaries/languageToCode.dictionnary";
import type { LanguageEnum } from "../../../enums/language.enum";
import type { LanguageCodeEnum } from "../../../enums/languageCode.enum";
import { getCookie } from "../../cookie/getCookie.helper";
import { setCookie } from "../../cookie/setCookie.helper";
import { getInvertObject } from "../../data/object/getInvertObject.helper";
import { getIsSupportedLanguage } from "../../translation/getIsSupportedLanguage.helper";

export const selectedLanguageInitiator = (
  supportedLanguages: LanguageEnum[],
  cookieName: string,
  defaultLanguage: LanguageEnum,
): LanguageCodeEnum => {
  let storedLanguage = getCookie(cookieName) as LanguageCodeEnum;
  const storedLanguageName = getInvertObject(languageToCode)[
    storedLanguage
  ] as LanguageEnum;

  if (!getIsSupportedLanguage(supportedLanguages, storedLanguageName)) {
    storedLanguage = languageToCode[defaultLanguage] as LanguageCodeEnum;
    setCookie(cookieName, storedLanguage, 24 * 365 * 100);
  }
  return storedLanguage;
};
