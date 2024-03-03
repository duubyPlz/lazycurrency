import { CurrencyType } from '../../view/calculator/currency/types';

// Typescript index signatures:
// https://dmitripavlutin.com/typescript-index-signatures/
// ? Is this correct..
export type RatesType = {
  [key: string]: number;
  TWD: number;
  MYR: number;
  HKD: number;
};

export type CalculatorState = {
  topAmount: number;
  bottomAmount: number;
  bottomCurrency: CurrencyType;
  rates: RatesType;
};

export type ActionInput = {
  setState: (partialState: Partial<CalculatorState>) => void;
  getState: () => CalculatorState;
};

export type SetTopAmountAction = (
  input: number,
) => ({
  setState,
}: {
  setState: (partialState: Partial<CalculatorState>) => void;
  getState: () => CalculatorState;
}) => void;

export type SetBottomAmountAction = (
  input: number,
) => ({
  setState,
}: {
  setState: (partialState: Partial<CalculatorState>) => void;
  getState: () => CalculatorState;
}) => void;

export type ConvertTopAmountAction = (
  amount: number,
  convertFn: (rate: number, amount: number) => number,
) => ({
  setState,
}: {
  setState: (partialState: Partial<CalculatorState>) => void;
  getState: () => CalculatorState;
}) => void;

export type ConvertBottomAmountAction = (
  amount: number,
  convertFn: (rate: number, amount: number) => number,
) => ({
  setState,
}: {
  setState: (partialState: Partial<CalculatorState>) => void;
  getState: () => CalculatorState;
}) => void;

export type CalculatorActions = {
  setTopAmount: SetTopAmountAction;
  setBottomAmount: SetBottomAmountAction;
  convertTopAmount: ConvertTopAmountAction;
  convertBottomAmount: ConvertBottomAmountAction;
};
