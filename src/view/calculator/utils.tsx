// TODO Logic: tests
export const sanitiseAmount = (input: string): number => {
  const parsedAmount = parseInt(input);

  // If the input isn't a number, return 0
  if (!parsedAmount) return 0;

  // If the input is below 0, return 0
  return parsedAmount >= 0 ? parsedAmount : 0;
};
