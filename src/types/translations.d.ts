import type { TranslationsFiles } from "../enums/TranslationsFiles.enum";

export type TranslationsObject = Record<string, string>;
export type Translations = Record<TranslationsFiles, TranslationsObject>;
