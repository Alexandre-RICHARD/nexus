import { createContext } from "react";

import type { Translations } from "../../types/translations";

export const TranslationsContext = createContext<Translations>({});
