export const roundNumber = (number: number, decimal: number): number => {
  return parseFloat(number.toFixed(decimal));
};
