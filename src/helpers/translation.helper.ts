import type { LanguageCodeEnum } from "../enums/languageCode.enum";
import type { Translations, TranslationsObject } from "../types/translations";

export const TranslationHelper = {
  getTranslationsFiles: async (
    filesContexts: Record<string, () => Promise<unknown>>,
    language: LanguageCodeEnum,
  ): Promise<Translations> => {
    const translationsFiles = {} as Translations;

    await Promise.all(
      Object.entries(filesContexts).map(async ([filePath]) => {
        const pathSplitted = filePath.split("/");
        const filePathLanguage = pathSplitted[
          pathSplitted.length - 2
        ] as LanguageCodeEnum;

        if (language === filePathLanguage) {
          try {
            const file = (await filesContexts[filePath]()) as {
              default: TranslationsObject;
            };
            const fileName = pathSplitted[pathSplitted.length - 1].slice(0, -3);

            if (fileName) {
              translationsFiles[fileName] = file.default;
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
