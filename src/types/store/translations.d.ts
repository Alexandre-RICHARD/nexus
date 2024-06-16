import type { LanguageEnum } from "../../enums/language.enum";

export interface TranslationState {
  language: LanguageEnum;
  setLanguage: (newLanguage: LanguageEnum) => void;
}
