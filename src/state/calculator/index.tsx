import { createHook, createStore } from 'react-sweet-state';
import type {
  ActionInput,
  CalculatorActions,
  CalculatorState,
  ConvertBottomAmountAction,
  ConvertTopAmountAction,
  RatesType,
  SetActiveCurrencyAction,
  SetBottomAmountAction,
  SetTopAmountAction,
} from './types';

import { CurrencyType } from './types';

// Actions
/**
 * Should only be called by the user
 */
export const setTopAmountAction: SetTopAmountAction =
  (input: number) =>
  ({ setState }: ActionInput) => {
    setState({ topAmount: input });
  };

/**
 * Should only be called by the user
 */
export const setBottomAmountAction: SetBottomAmountAction =
  (input: number) =>
  ({ setState }: ActionInput) => {
    setState({ bottomAmount: input });
  };

// TODO Logic: tests
/**
 * Should only be called by the converter
 */
export const convertTopAmountAction: ConvertTopAmountAction =
  (
    amount: number,
    convertFn: (rate: number, amount: number) => number,
  ) =>
  ({ setState, getState }: ActionInput) => {
    const rates = getState().rates;
    const activeCurrency = getState().activeCurrency;

    setState({
      topAmount: convertFn(rates[activeCurrency] ?? 0, amount),
    });
  };

/**
 * Should only be called by the converter
 */
export const convertBottomAmountAction: ConvertBottomAmountAction =
  (
    amount: number,
    convertFn: (rate: number, amount: number) => number,
  ) =>
  ({ setState, getState }: ActionInput) => {
    const rates = getState().rates;
    const activeCurrency = getState().activeCurrency;

    setState({
      bottomAmount: convertFn(rates[activeCurrency] ?? 0, amount),
    });
  };

export const setActiveCurrencyAction: SetActiveCurrencyAction =
  (currencyType: CurrencyType) =>
  ({ setState }: ActionInput) => {
    setState({ activeCurrency: currencyType });
  };

const actions: CalculatorActions = {
  setTopAmount: setTopAmountAction,
  setBottomAmount: setBottomAmountAction,
  convertTopAmount: convertTopAmountAction,
  convertBottomAmount: convertBottomAmountAction,
  setActiveCurrency: setActiveCurrencyAction,
};

// Initial state & creating store
// TODO Refactor: Move into model
const defaultRates: RatesType = {
  [CurrencyType.TWD]: 23.5,
  [CurrencyType.MYR]: 3.15,
  [CurrencyType.HKD]: 6,
};

const initialState: CalculatorState = {
  topAmount: 0,
  bottomAmount: 0,
  activeCurrency: CurrencyType.TWD,
  rates: defaultRates,
};

export const CalculatorStore = createStore({
  initialState,
  actions,
  name: 'Calculator',
});

// Hooks
export const useCalculatorStore = createHook(CalculatorStore); // TODO Refactor: Move into model

export const useCalculatorActions = createHook(CalculatorStore, {
  selector: null,
});
