import type { StateCreator } from "zustand";

import { CookieEnum } from "../enums/cookie.enum";
import { CookieHelper } from "../helpers/cookie.helper";
import type { TranslationState } from "../types/store/translations";
import { TranslationsStoreHelper } from "./helpers/translations.store.helper";

export const useTranslationStore: StateCreator<TranslationState> = (set) => ({
  language: TranslationsStoreHelper.languageInitiator(),
  setLanguage: (newLanguage) => {
    CookieHelper.setCookie(CookieEnum.LANG, newLanguage, 24 * 365 * 100);
    set(() => ({ language: newLanguage }));
  },
});
