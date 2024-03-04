import { createHook } from 'react-sweet-state';
import { FIELD_TOP_ID } from '../../view/calculator';
import {
  type CalculatorState,
  type CurrencyType,
  type RatesType,
} from './types';
import { CalculatorStore } from '.';

// TODO Logic: tests
export const getAmount = (state: CalculatorState, id: string) => {
  const { topAmount, bottomAmount } = state;

  return id === FIELD_TOP_ID ? topAmount : bottomAmount;
};

export const getRates = (state: CalculatorState): RatesType =>
  state.rates;
export const useRates = createHook(CalculatorStore, {
  selector: getRates,
});

export const getActiveCurrency = (
  state: CalculatorState,
): CurrencyType => state.activeCurrency;
export const useActiveCurrency = createHook(CalculatorStore, {
  selector: getActiveCurrency,
});
