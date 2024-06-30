// TODO Essayer de rajouter en objet de type translationFiles
export type TranslationsObject = Record<string, string>;
export type TranslationsFiles<TranslationsFilesEnum> = TranslationsFilesEnum;
export type Translations<TranslationsFilesEnum> = Record<
  TranslationsFilesEnum,
  TranslationsObject
>;
