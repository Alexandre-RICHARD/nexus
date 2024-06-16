import { useContext } from "react";

import type { TranslationsFiles } from "../../enums/TranslationsFiles.enum";
import { TranslationsContext } from "../contexts/Translations.context";

export const useTranslations = () => {
  const translations = useContext(TranslationsContext);
  // TODO Mettre un objet de param
  const t = (files: TranslationsFiles, key: string): string => {
    if (translations[files]?.[key]) return translations[files][key];
    return "";
  };

  return t;
};
