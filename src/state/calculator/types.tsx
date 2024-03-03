export type CalculatorState = {
  topAmount: number;
  bottomAmount: number;
};

export type CalculatorAction = {
  setTopAmount: (
    input: number,
  ) => ({
    setState,
  }: {
    setState: (
      partialState: Partial<CalculatorState>,
    ) => void;
    getState: () => CalculatorState;
  }) => void;
  setBottomAmount: (
    input: number,
  ) => ({
    setState,
  }: {
    setState: (
      partialState: Partial<CalculatorState>,
    ) => void;
    getState: () => CalculatorState;
  }) => void;
};
