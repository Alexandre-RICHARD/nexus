import { createContext } from "react";

import type { TranslationsType } from "../../types/translations";

export const TranslationsContext = createContext<TranslationsType>({});
