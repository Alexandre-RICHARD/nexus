import { expect, test } from "vitest";

import { supportedLanguages } from "../assets/resources/supportedLanguages";
import { CookieEnum } from "../enums/cookie.enum";
import { LanguageEnum } from "../enums/language.enum";
import { CookieHelper } from "../helpers/cookie.helper";
// import { TranslationHelper as T } from "../helper/translation.helper";
import { getState, useCombinedStore } from "../store/combined.store";

test("State language should be valid language", () => {
  const currentLanguage = getState().language;
  expect(Object.values(LanguageEnum).includes(currentLanguage)).toBeTruthy();
});

test("Translation should be found", () => {
  // TODO
  // const key = "selectLanguage";
  // const currentLanguage = getState().language;
  // const translation = T.getT(currentLanguage, key);
  // expect(translation).not.toBe(key);
  expect(true).toBeTruthy();
});

test("Change language", () => {
  useCombinedStore.setState({ language: LanguageEnum.ENGLISH });
  const newLanguageEN = getState().language;
  const cookieLanguage = CookieHelper.getCookie(CookieEnum.LANG);
  expect(newLanguageEN === cookieLanguage);
  expect(newLanguageEN).toBe(LanguageEnum.ENGLISH);
  useCombinedStore.setState({ language: LanguageEnum.FRENCH });
  const newLanguageFR = getState().language;
  expect(newLanguageFR).toBe(LanguageEnum.FRENCH);
});

test("Supported languages and languages enum should be match", () => {
  const supportedLanguagesKey = supportedLanguages.map(
    (supportedLanguage) => supportedLanguage.key,
  );
  const languagesEnumKey = Object.values(LanguageEnum);
  const areArrayIdentical =
    supportedLanguagesKey.length === languagesEnumKey.length &&
    supportedLanguagesKey.every(
      (languageKey, index) => languageKey === languagesEnumKey[index],
    );

  expect(areArrayIdentical).toBeTruthy();
});
