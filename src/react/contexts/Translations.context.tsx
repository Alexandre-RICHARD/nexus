import React, { createContext, useEffect, useState } from "react";

import type { TranslationsObject } from "../../../../src/types/translations";
import type { LanguageEnum } from "../../enums/language.enum";
import { TranslationHelper } from "../../helpers/translation.helper";

type PropTypes = {
  language: LanguageEnum;
  children: React.ReactElement;
};

export const TranslationsContext = createContext<
  Record<string, TranslationsObject>
>({
  translations: {},
});

export const TranslationProvider = ({
  language,
  children,
}: PropTypes): React.ReactElement => {
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    // TODO, peut-être moyen de revenir à plus simple comme avant
    const fetchData = async () => {
      try {
        const loadedTranslations =
          await TranslationHelper.getTranslationsFiles(language);
        setTranslations(loadedTranslations);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData()
      .then((translationsFile) => translationsFile)
      .catch((error) => console.error(error));
  }, [language]);

  return (
    <TranslationsContext.Provider value={translations}>
      {children}
    </TranslationsContext.Provider>
  );
};
