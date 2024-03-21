import { createHook } from 'react-sweet-state';
import { FIELD_TOP_ID } from '../../ui/calculator';
import {
  type CalculatorState,
  type CurrencyType,
  type RatesType,
} from './types';
import { CalculatorStore } from '.';

// TODO Tests
export const getAmount = (state: CalculatorState, id: string) => {
  const { topAmount, bottomAmount } = state;

  return id === FIELD_TOP_ID ? topAmount : bottomAmount;
};

const getRates = (state: CalculatorState): RatesType => state.rates;
export const useRates = createHook(CalculatorStore, {
  selector: getRates,
});

const getActiveCurrency = (state: CalculatorState): CurrencyType =>
  state.activeCurrency;
export const useActiveCurrency = createHook(CalculatorStore, {
  selector: getActiveCurrency,
});

const getShiftWidth = (state: CalculatorState): number =>
  state.shiftWidth;
export const useShiftWidth = createHook(CalculatorStore, {
  selector: getShiftWidth,
});
