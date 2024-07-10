import { type Context, useContext } from "react";

import type { Translations, TranslationsFiles } from "../../types/translations";
import { TranslationsContext } from "../contexts/Translations.context";

export const useTranslations = <TranslationsFilesList extends string>() => {
  const translations = useContext<Translations<TranslationsFilesList>>(
    TranslationsContext as unknown as Context<
      Translations<TranslationsFilesList>
    >,
  );
  // TODO Mettre un objet de param + tester depths
  const t = (
    files: TranslationsFiles<TranslationsFilesList>,
    key: string,
  ): string => {
    return translations[files]?.[key] ?? "";
  };

  return t;
};
