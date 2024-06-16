import { CountryEnum } from "../../enums/country.enum";
import { LanguageEnum } from "../../enums/language.enum";
import type { SupportedLanguagesTypes } from "../../types/language";

export const supportedLanguages: SupportedLanguagesTypes[] = [
  {
    key: LanguageEnum.ENGLISH,
    countryFlag: CountryEnum.UNITED_STATES,
    isSupported: true,
  },
  {
    key: LanguageEnum.FRENCH,
    countryFlag: CountryEnum.FRANCE,
    isSupported: true,
  },
];
