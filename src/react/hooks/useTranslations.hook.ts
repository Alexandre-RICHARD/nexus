import { useContext } from "react";

import { TranslationsContext } from "../contexts/Translations.context";

export const useTranslations = () => {
  const translations = useContext(TranslationsContext);
  const Nt = (files: string, key: string): string => {
    return translations?.[files]?.[key] ?? "";
  };

  return Nt;
};
