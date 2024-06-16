import type React from "react";
import { useShallow } from "zustand/react/shallow";

import { nativeLanguageNames } from "../../../../assets/resources/nativeLanguageNames";
import { supportedLanguages } from "../../../../assets/resources/supportedLanguages";
import type { LanguageEnum } from "../../../../enums/language.enum";
import { TranslationsFiles } from "../../../../enums/TranslationsFiles.enum";
import { useCombinedStore } from "../../../../store/combined.store";
import { useTranslations } from "../../../hooks/useTranslations";
import { DropdownItemWithIcon } from "../../atoms/DropdownItemWithIcon/DropdownItemWithIcon";
import { Selector } from "../Selector/Selector";

export const LanguagesSelector = (): React.ReactElement => {
  const t = useTranslations();

  const [setLanguage] = useCombinedStore(
    useShallow((state) => [state.setLanguage]),
  );

  const languagesSelectOption = supportedLanguages
    .filter((oneLanguage) => oneLanguage.isSupported)
    .sort((a, b) => {
      const stringA = t(TranslationsFiles.LANGUAGES, a.key);
      const stringB = t(TranslationsFiles.LANGUAGES, b.key);
      if (stringA < stringB) {
        return -1;
      }
      if (stringA > stringB) {
        return 1;
      }
      return 0;
    })
    .map((oneLanguage) => {
      return {
        label: (
          <DropdownItemWithIcon
            icon={
              <img
                alt={`Country flag of ${oneLanguage.countryFlag}`}
                src={`/src/assets/images/languagesFlags/${oneLanguage.countryFlag}.png`}
              />
            }
            label={
              <>
                <p>{t(TranslationsFiles.LANGUAGES, oneLanguage.key)}</p>
                <span>({nativeLanguageNames[oneLanguage.key]})</span>
              </>
            }
            key={oneLanguage.key}
          />
        ),
        value: oneLanguage.key,
      };
    });

  return (
    <Selector
      id="language"
      items={languagesSelectOption}
      onSelect={(item) => setLanguage(item as LanguageEnum)}
    />
  );
};
