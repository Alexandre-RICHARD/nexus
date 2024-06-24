import { nativeLanguageNames } from "./assets/translations/nativeLanguageNames";
import { languageToCountry } from "./dictionnary/languageToCountry";
import { CountryEnum } from "./enums/country.enum";
import { LanguageEnum } from "./enums/language.enum";
import { CookieHelper } from "./helpers/cookie.helper";
import { ExistHelper } from "./helpers/exist.helper";
import { ImageHelper } from "./helpers/image.helper";
import { ButtonSelect } from "./react/components/ButtonSelect/ButtonSelect";
import { Dropdown } from "./react/components/Dropdown/Dropdown";
import { DropdownItemWithIcon } from "./react/components/DropdownItemWithIcon/DropdownItemWithIcon";
import { Selector } from "./react/components/Selector/Selector";
import type { FetchMethod } from "./types/fetchMethod";
import type { LanguageToCountry } from "./types/language";
import type { SelectItems } from "./types/react/selectedItems";

// React hooks

// react contexts

// React components
export { ButtonSelect, Dropdown, DropdownItemWithIcon, Selector };

// Functions

// Helpers
export { CookieHelper, ExistHelper, ImageHelper };

// Resources
export { languageToCountry, nativeLanguageNames };

// Types
export type { FetchMethod, LanguageToCountry, SelectItems };

// Enums
export { CountryEnum, LanguageEnum };
