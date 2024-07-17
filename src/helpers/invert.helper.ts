export const InvertHelper = {
  getInvertEnumObject: <T extends string>(
    enumValue: Record<keyof T, T>,
  ): Record<T, keyof T> => {
    return Object.entries(enumValue).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [value]: key,
      }),
      {} as Record<T, keyof T>,
    );
  },

  getInvertObject: (
    originalObject: Record<string, string>,
  ): Record<string, string> => {
    return Object.entries(originalObject).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [value]: key,
      }),
      {} as Record<string, string>,
    );
  },
};
