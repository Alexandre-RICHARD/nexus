import { languageToCode } from "./dictionnaries/languageToCode.dictionnary";
import { languageToCountry } from "./dictionnaries/languageToCountry.dictionnary";
import { nativeLanguageNames } from "./dictionnaries/nativeLanguageNames.dictionnary";
import { CountryEnum } from "./enums/country.enum";
import { LanguageEnum } from "./enums/language.enum";
import { LanguageCodeEnum } from "./enums/languageCode.enum";
import { CookieHelper } from "./helpers/cookie.helper";
import { ImageHelper } from "./helpers/image.helper";
import { InvertHelper } from "./helpers/invert.helper";
import { SortHelper } from "./helpers/sort.helper";
import { TranslationsStoreHelper } from "./helpers/store/translations.store.helper";
import { TranslationHelper } from "./helpers/translation.helper";
import { ButtonSelect } from "./react/components/ButtonSelect/ButtonSelect";
import { Dropdown } from "./react/components/Dropdown/Dropdown";
import { IconContainer } from "./react/components/IconContainer/IconContainer";
import { LabelWithIcon } from "./react/components/LabelWithIcon/LabelWithIcon";
import { Selector } from "./react/components/Selector/Selector";
import { TranslationsContext } from "./react/contexts/Translations.context";
import { TranslationProvider } from "./react/contexts/Translations.provider";
import { useTranslations } from "./react/hooks/useTranslations.hook";
import { DropdownArrow } from "./react/icons/DropdownArrow";
import type { SelectItemsTypes } from "./types/react/selectedItems";

// React hooks
export { useTranslations };

// React provider
export { TranslationProvider };

// React contexts
export { TranslationsContext };

// React components
export { ButtonSelect, Dropdown, IconContainer, LabelWithIcon, Selector };

// Icons components
export { DropdownArrow };

// Functions

// Helpers
export {
  CookieHelper,
  ImageHelper,
  InvertHelper,
  SortHelper,
  TranslationHelper,
  TranslationsStoreHelper,
};

// Resources
export { languageToCode, languageToCountry, nativeLanguageNames };

// Types
export type { SelectItemsTypes };

// Enums
export { CountryEnum, LanguageCodeEnum, LanguageEnum };
