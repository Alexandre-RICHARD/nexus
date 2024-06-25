import { languageCode } from "./dictionnaries/languageCode";
import { languageToCountry } from "./dictionnaries/languageToCountry";
import { nativeLanguageNames } from "./dictionnaries/nativeLanguageNames";
import { CountryEnum } from "./enums/country.enum";
import { LanguageEnum } from "./enums/language.enum";
import { ReservedTranslationsFiles } from "./enums/reservedTranslationsFiles.enum";
import { CookieHelper } from "./helpers/cookie.helper";
import { ExistHelper } from "./helpers/exist.helper";
import { ImageHelper } from "./helpers/image.helper";
import { ButtonSelect } from "./react/components/ButtonSelect/ButtonSelect";
import { Dropdown } from "./react/components/Dropdown/Dropdown";
import { DropdownItemWithIcon } from "./react/components/DropdownItemWithIcon/DropdownItemWithIcon";
import { Selector } from "./react/components/Selector/Selector";
import type { FetchMethodTypes } from "./types/fetchMethod";
import type { LanguageToCountryTypes } from "./types/language";
import type { SelectItemsTypes } from "./types/react/selectedItems";

// React hooks

// react contexts

// React components
export { ButtonSelect, Dropdown, DropdownItemWithIcon, Selector };

// Functions

// Helpers
export { CookieHelper, ExistHelper, ImageHelper };

// Resources
export { languageCode, languageToCountry, nativeLanguageNames };

// Types
export type { FetchMethodTypes, LanguageToCountryTypes, SelectItemsTypes };

// Enums
export { CountryEnum, LanguageEnum, ReservedTranslationsFiles };
