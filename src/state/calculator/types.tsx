export enum CurrencyType {
  AUD = 'AUD',
  HKD = 'HKD',
  MYR = 'MYR',
  TWD = 'TWD',
}

// Typescript index signatures:
// https://dmitripavlutin.com/typescript-index-signatures/
// Partial enum as object key:
// https://stackoverflow.com/questions/44243060/use-enum-as-restricted-key-type-in-typescript
export type RatesType = {
  [key in CurrencyType]?: number;
};

export type CalculatorState = {
  topAmount: number;
  bottomAmount: number;
  activeCurrency: CurrencyType;
  rates: RatesType;
};

// ! Type: Want to simplify (& ActionOutput) but not sure how
export type ActionInput = {
  setState: (partialState: Partial<CalculatorState>) => void;
  getState: () => CalculatorState;
};

type ActionOutput = ({
  setState,
}: {
  setState: (partialState: Partial<CalculatorState>) => void;
  getState: () => CalculatorState;
}) => void;

export type SetTopAmountAction = (input: number) => ActionOutput;

export type SetBottomAmountAction = (input: number) => ActionOutput;

export type ConvertTopAmountAction = (
  amount: number,
  convertFn: (rate: number, amount: number) => number,
) => ActionOutput;

export type ConvertBottomAmountAction = (
  amount: number,
  convertFn: (rate: number, amount: number) => number,
) => ActionOutput;

export type SetActiveCurrencyAction = (
  currencyType: CurrencyType,
) => ActionOutput;

export type CalculatorActions = {
  setTopAmount: SetTopAmountAction;
  setBottomAmount: SetBottomAmountAction;
  convertTopAmount: ConvertTopAmountAction;
  convertBottomAmount: ConvertBottomAmountAction;
  setActiveCurrency: SetActiveCurrencyAction;
};
