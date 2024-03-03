import { createHook, createStore } from 'react-sweet-state';
import type { CalculatorState } from './types';
import { CurrencyType } from '../../view/calculator/currency/types';
import actions from './actions';

// Sweet state
const initialState: CalculatorState = {
  topAmount: 0,
  bottomAmount: 0,
  bottomCurrency: CurrencyType.HKD,
};

const CalculatorStore = createStore({
  initialState,
  actions,
  name: 'Calculator',
});

export const useCalculatorStore = createHook(CalculatorStore);
