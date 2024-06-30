import { useContext } from "react";

import { TranslationsContext } from "../contexts/Translations.context";

export const useTranslations = () => {
  const translations = useContext(TranslationsContext);
  // TODO Mettre un objet de param + tester depths
  const t = (files: string, key: string): string => {
    return translations[files]?.[key] ?? "";
  };

  return t;
};
