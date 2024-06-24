import type { CountryEnum } from "../enums/country.enum";
import type { LanguageEnum } from "../enums/language.enum";

export type LanguageToCountry = Record<LanguageEnum, CountryEnum>;
