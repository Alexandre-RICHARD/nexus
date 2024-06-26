import { languageCode } from "../dictionnaries/languageCode";
import type { LanguageEnum } from "../enums/language.enum";
import type { Translations, TranslationsObject } from "../types/translations";

export const TranslationHelper = {
  getTranslationsFiles: async <TranslationsFilesEnum>(
    filesContexts: Record<string, () => Promise<unknown>>,
    language: LanguageEnum,
  ): Promise<Translations<TranslationsFilesEnum>> => {
    const translationsFiles = {} as Translations<TranslationsFilesEnum>;

    await Promise.all(
      Object.entries(filesContexts).map(async ([filePath]) => {
        const currentLanguageCode = languageCode[language];
        const pathSplitted = filePath.split("/");
        const filePathLanguage = pathSplitted[pathSplitted.length - 2];

        if (currentLanguageCode === filePathLanguage) {
          try {
            const file = (await filesContexts[filePath]()) as {
              default: TranslationsObject;
            };
            const fileName = pathSplitted[pathSplitted.length - 1].slice(0, -3);

            if (fileName) {
              // TODO Hors de question d'utiliser un type importé depuis le projet principal
              translationsFiles[fileName as TranslationsFilesEnum] =
                file.default;
            } else {
              throw new Error(
                "Unable to access file path to extract file name",
              );
            }
          } catch (error) {
            console.error(error);
          }
        }
      }),
    );
    return translationsFiles;
  },
};
