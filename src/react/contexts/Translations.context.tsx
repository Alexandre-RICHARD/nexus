import React, { createContext, useEffect, useState } from "react";

import type { LanguageEnum } from "../../enums/language.enum";
import { TranslationHelper } from "../../helpers/translation.helper";
import type { Translations } from "../../types/translations";

type PropTypes = {
  filesContexts: Record<string, () => Promise<unknown>>;
  language: LanguageEnum;
  children: React.ReactElement;
};

export const TranslationsContext = createContext<Translations<string>>({
  translations: {},
});

export const TranslationProvider = <TranslationsFilesEnum extends string>({
  filesContexts,
  language,
  children,
}: PropTypes): React.ReactElement => {
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTranslations(
          await TranslationHelper.getTranslationsFiles<TranslationsFilesEnum>(
            filesContexts,
            language,
          ),
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
