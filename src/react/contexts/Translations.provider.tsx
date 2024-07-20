import React, { type Context, useEffect, useState } from "react";

import { TranslationHelper } from "../../helpers/translation.helper";
import type { LanguageCodeEnum } from "../../nexusExporter";
import type { TranslationsType } from "../../types/translations";

type PropsType = {
  TranslationsContext: Context<TranslationsType>;
  filesContexts: Record<string, () => Promise<unknown>>;
  language: LanguageCodeEnum;
  children: React.JSX.Element;
};

export const TranslationProvider = ({
  TranslationsContext,
  filesContexts,
  language,
  children,
}: PropsType): React.JSX.Element => {
  const [translations, setTranslations] = useState<TranslationsType>({});

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
