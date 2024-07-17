import React, { type Context, useEffect, useState } from "react";

import { TranslationHelper } from "../../helpers/translation.helper";
import type { LanguageCodeEnum } from "../../nexusExporter";
import type { Translations } from "../../types/translations";

type PropsTypes = {
  TranslationsContext: Context<Translations>;
  filesContexts: Record<string, () => Promise<unknown>>;
  language: LanguageCodeEnum;
  children: React.ReactElement;
};

export const TranslationProvider = ({
  TranslationsContext,
  filesContexts,
  language,
  children,
}: PropsTypes): React.ReactElement => {
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
