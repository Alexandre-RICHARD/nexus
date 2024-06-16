import React, { createContext, useEffect, useState } from "react";

import { TranslationHelper } from "../../helpers/translation.helper";
import { useCombinedStore } from "../../store/combined.store";
import type { TranslationsObject } from "../../types/translations";

interface PropTypes {
  children: React.ReactElement;
}

export const TranslationsContext = createContext<
  Record<string, TranslationsObject>
>({
  translations: {},
});

export const TranslationProvider = ({
  children,
}: PropTypes): React.ReactElement => {
  const language = useCombinedStore((state) => state.language);

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
