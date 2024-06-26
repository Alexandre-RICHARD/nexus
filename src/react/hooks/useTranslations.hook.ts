import { useContext } from "react";

import type { TranslationsFilesTypes } from "../../../../src/enums/translationsFiles.enum";
import { TranslationsContext } from "../contexts/Translations.context";

export const useTranslations = () => {
  const translations = useContext(TranslationsContext);
  // TODO Mettre un objet de param
  // TODO Hors de question aussi ici
  const t = (files: TranslationsFilesTypes, key: string): string => {
    return translations[files]?.[key] ?? "";
  };

  return t;
};
