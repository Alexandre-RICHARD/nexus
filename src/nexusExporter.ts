import { languageCode } from "./dictionnaries/languageCode";
import { languageToCountry } from "./dictionnaries/languageToCountry";
import { nativeLanguageNames } from "./dictionnaries/nativeLanguageNames";
import { CountryEnum } from "./enums/country.enum";
import { LanguageEnum } from "./enums/language.enum";
import { ReservedTranslationsFiles } from "./enums/reservedTranslationsFiles.enum";
import { CookieHelper } from "./helpers/cookie.helper";
import { ExistHelper } from "./helpers/exist.helper";
import { ImageHelper } from "./helpers/image.helper";
import { TranslationsStoreHelper } from "./helpers/store/translations.store.helper";
import { TranslationHelper } from "./helpers/translation.helper";
import { ButtonSelect } from "./react/components/ButtonSelect/ButtonSelect";
import { Dropdown } from "./react/components/Dropdown/Dropdown";
import { DropdownItemWithIcon } from "./react/components/DropdownItemWithIcon/DropdownItemWithIcon";
import { Selector } from "./react/components/Selector/Selector";
import { TranslationProvider } from "./react/contexts/Translations.context";
import { useTranslations } from "./react/hooks/useTranslations.hook";
import type { FetchMethodTypes } from "./types/fetchMethod";
import type { LanguageToCountryTypes } from "./types/language";
import type { SelectItemsTypes } from "./types/react/selectedItems";

// React hooks
export { useTranslations };

// react contexts
export { TranslationProvider };

// React components
export { ButtonSelect, Dropdown, DropdownItemWithIcon, Selector };

// Functions

// Helpers
export {
  CookieHelper,
  ExistHelper,
  ImageHelper,
  TranslationHelper,
  TranslationsStoreHelper,
};

// Resources
export { languageCode, languageToCountry, nativeLanguageNames };

// Types
export type { FetchMethodTypes, LanguageToCountryTypes, SelectItemsTypes };

// Enums
export { CountryEnum, LanguageEnum, ReservedTranslationsFiles };
