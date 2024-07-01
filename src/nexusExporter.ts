import { languageToCountry } from "./dictionnaries/languageToCountry";
import { nativeLanguageNames } from "./dictionnaries/nativeLanguageNames";
import { LanguageEnum } from "./enums/language.enum";
import { CookieHelper } from "./helpers/cookie.helper";
import { ImageHelper } from "./helpers/image.helper";
import { SortHelper } from "./helpers/sort.helper";
import { TranslationsStoreHelper } from "./helpers/store/translations.store.helper";
import { TranslationHelper } from "./helpers/translation.helper";
import { ButtonSelect } from "./react/components/ButtonSelect/ButtonSelect";
import { Dropdown } from "./react/components/Dropdown/Dropdown";
import { DropdownItemWithIcon } from "./react/components/DropdownItemWithIcon/DropdownItemWithIcon";
import { Selector } from "./react/components/Selector/Selector";
import { TranslationProvider } from "./react/contexts/Translations.context";
import { useTranslations } from "./react/hooks/useTranslations.hook";
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
  ImageHelper,
  SortHelper,
  TranslationHelper,
  TranslationsStoreHelper,
};

// Resources
export { languageToCountry, nativeLanguageNames };

// Types
export type { SelectItemsTypes };

// Enums
export { LanguageEnum };
