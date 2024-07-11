import React, { type Context, useEffect, useState } from "react";

import type { LanguageEnum } from "../../enums/language.enum";
import { TranslationHelper } from "../../helpers/translation.helper";
import type { Translations } from "../../types/translations";

export const TranslationProvider = ({
  TranslationsContext,
  filesContexts,
  language,
  children,
}: {
  TranslationsContext: Context<Translations>;
  filesContexts: Record<string, () => Promise<unknown>>;
  language: LanguageEnum;
  children: React.ReactElement;
}): React.ReactElement => {
  const [translations, setTranslations] = useState<Translations>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTranslations(
          await TranslationHelper.getTranslationsFiles(filesContexts, language),
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchData()
      .then((translationsFile) => translationsFile)
      .catch((error) => console.error(error));
  }, [filesContexts, language]);

  return (
    <TranslationsContext.Provider value={translations}>
      {children}
    </TranslationsContext.Provider>
  );
};
