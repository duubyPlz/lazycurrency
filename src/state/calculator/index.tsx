import { createHook, createStore } from 'react-sweet-state';
import type { CalculatorState, RatesType } from './types';
import { CurrencyType } from '../../view/calculator/currency/types';
import actions from './actions';

// TODO Refactor: Move into model
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultRates: RatesType = {
  TWD: 23.5,
  MYR: 3.15,
  HKD: 6,
};

// Sweet state
const initialState: CalculatorState = {
  topAmount: 0,
  bottomAmount: 0,
  bottomCurrency: CurrencyType.TWD,
  rates: defaultRates,
};

const CalculatorStore = createStore({
  initialState,
  actions,
  name: 'Calculator',
});

export const useCalculatorStore = createHook(CalculatorStore);
