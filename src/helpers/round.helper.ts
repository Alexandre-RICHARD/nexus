export const roundNumberHelper = (number: number, decimal: number): number => {
  return parseFloat(number.toFixed(decimal));
};
