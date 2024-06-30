import { useContext } from "react";

import type { TranslationsFiles } from "../../types/translations";
import { TranslationsContext } from "../contexts/Translations.context";

export const useTranslations = <TranslationsFilesList extends string>() => {
  const translations = useContext(TranslationsContext);
  // TODO Mettre un objet de param + tester depths
  const t = (
    files: TranslationsFiles<TranslationsFilesList>,
    key: string,
  ): string => {
    return translations[files]?.[key] ?? "";
  };

  return t;
};
