import type { LanguageEnum } from "../enums/language.enum";

export interface SupportedLanguagesTypes {
  key: LanguageEnum;
  countryFlag: string;
  isSupported: boolean;
}
