import { CurrencyType } from '../../view/calculator/currency/types';

export type CalculatorState = {
  topAmount: number;
  bottomAmount: number;
  bottomCurrency: CurrencyType;
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
  rate: number,
  amount: number,
  convertFn: (rate: number, amount: number) => number,
) => ({
  setState,
}: {
  setState: (partialState: Partial<CalculatorState>) => void;
  getState: () => CalculatorState;
}) => void;

export type ConvertBottomAmountAction = (
  rate: number,
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
