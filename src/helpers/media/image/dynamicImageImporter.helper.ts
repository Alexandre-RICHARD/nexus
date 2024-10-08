export const dynamicImageImporter = (path: string): string => {
  return new URL(`/src/assets/images/${path}`, import.meta.url).href;
};
