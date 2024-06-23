export const ImageHelper = {
  dynamicImageImporter: (path: string) => {
    return new URL(`/src/assets/images/${path}`, import.meta.url).href;
  },
};
